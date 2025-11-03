/**
 * EXPRESS WITH TYPESCRIPT
 * Type-safe Express server example
 * 
 * Install: npm install express @types/express
 * Optional: npm install cors morgan helmet @types/cors @types/morgan @types/helmet
 */

import express, { Request, Response, NextFunction, RequestHandler } from 'express';
import { User, createUser, UserManager } from '../01-modules/types.js';

// Type extensions
interface AuthenticatedRequest extends Request {
  user?: User;
  startTime?: number;
}

// Custom types
type RequestWithBody<T> = Request<{}, {}, T>;
type RequestWithParams<T> = Request<T>;
type RequestWithQuery<T> = Request<{}, {}, {}, T>;

// Validation middleware type
type ValidationFunction = (req: Request) => string | null;

const app = express();
const port = 3000;
const userManager = new UserManager();

// Middleware with types
const logger: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
};

const timingMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  req.startTime = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - (req.startTime || 0);
    console.log(`Request took ${duration}ms`);
  });
  
  next();
};

const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  
  if (!token) {
    res.status(401).json({ error: 'No token provided' });
    return;
  }
  
  // Mock authentication
  if (token === 'secret-token') {
    req.user = { id: 1, name: 'Alice', email: 'alice@example.com' };
    next();
  } else {
    res.status(403).json({ error: 'Invalid token' });
  }
};

// Validation middleware factory
const validate = (validationFn: ValidationFunction): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    const error = validationFn(req);
    if (error) {
      res.status(400).json({ error });
      return;
    }
    next();
  };
};

// Request body types
interface CreateUserBody {
  name: string;
  email: string;
}

interface UpdateUserBody {
  name?: string;
  email?: string;
}

// Route handlers with proper types
app.use(express.json());
app.use(logger);
app.use(timingMiddleware);

// Public routes
app.get('/', (req: Request, res: Response) => {
  res.json({ 
    message: 'Express + TypeScript API',
    timestamp: new Date().toISOString()
  });
});

// GET with query parameters
app.get('/users', (req: RequestWithQuery<{ limit?: string; offset?: string }>, res: Response) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : 10;
  const offset = req.query.offset ? parseInt(req.query.offset) : 0;
  
  const users = userManager.getAllUsers();
  const paginatedUsers = users.slice(offset, offset + limit);
  
  res.json({
    data: paginatedUsers,
    pagination: { limit, offset, total: users.length }
  });
});

// GET with URL parameters
app.get('/users/:id', (req: RequestWithParams<{ id: string }>, res: Response) => {
  const id = parseInt(req.params.id);
  const user = userManager.getUser(id);
  
  if (!user) {
    res.status(404).json({ error: 'User not found' });
    return;
  }
  
  res.json(user);
});

// POST with body validation
const validateUser: ValidationFunction = (req: Request) => {
  const { name, email } = req.body;
  if (!name) return 'Name is required';
  if (!email) return 'Email is required';
  if (!email.includes('@')) return 'Invalid email format';
  return null;
};

app.post(
  '/users',
  validate(validateUser),
  (req: RequestWithBody<CreateUserBody>, res: Response) => {
    const { name, email } = req.body;
    
    try {
      const newUser = createUser(name, email);
      userManager.addUser(newUser);
      
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user' });
    }
  }
);

// PUT with validation
app.put(
  '/users/:id',
  authMiddleware,
  (req: AuthenticatedRequest & RequestWithParams<{ id: string }> & RequestWithBody<UpdateUserBody>, 
   res: Response) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    const user = userManager.getUser(id);
    
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    
    // Only allow users to update themselves
    if (req.user?.id !== user.id) {
      res.status(403).json({ error: 'Cannot update other users' });
      return;
    }
    
    const updatedUser = { ...user };
    if (name) updatedUser.name = name;
    if (email) updatedUser.email = email;
    
    // In a real app, you'd save this
    res.json(updatedUser);
  }
);

// DELETE
app.delete('/users/:id', authMiddleware, (req: AuthenticatedRequest & RequestWithParams<{ id: string }>, res: Response) => {
  const id = parseInt(req.params.id);
  
  if (req.user?.id !== id) {
    res.status(403).json({ error: 'Cannot delete other users' });
    return;
  }
  
  // In a real app, you'd delete the user
  res.status(204).send();
});

// Error handling middleware
interface ErrorWithStatus extends Error {
  status?: number;
}

const errorHandler = (
  err: ErrorWithStatus,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('Error:', err.stack);
  
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  
  res.status(status).json({
    error: message,
    status,
    timestamp: new Date().toISOString()
  });
};

app.use(errorHandler);

// Async route handler wrapper
const asyncHandler = (fn: RequestHandler): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

// Example async route
app.get('/async-example', asyncHandler(async (req: Request, res: Response) => {
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 1000));
  res.json({ message: 'Async operation complete' });
}));

// Start server
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log('Try these endpoints:');
    console.log('  GET  /');
    console.log('  GET  /users');
    console.log('  GET  /users/1');
    console.log('  POST /users -d \'{"name":"John","email":"john@test.com"}\'');
    console.log('  PUT  /users/1 -H "Authorization: secret-token"');
  });
}

export { app };