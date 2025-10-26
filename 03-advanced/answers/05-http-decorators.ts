/**
 * EXERCISE 5: HTTP Decorators - SOLUTION
 */

// Metadata storage
const ROUTES_METADATA = Symbol("routes");
const PARAM_METADATA = Symbol("params");

// Parameter types
type ParamType = "param" | "body" | "query";

interface RouteMetadata {
  method: string;
  path: string;
  handler: string;
}

interface ParamMetadata {
  index: number;
  type: ParamType;
  name?: string;
}

// Solution: Controller decorator
function Controller(basePath: string) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      static basePath = basePath;
    };
  };
}

// Solution: Method decorators
function Get(path: string = "") {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const routes: RouteMetadata[] = Reflect.getMetadata(ROUTES_METADATA, target) || [];
    routes.push({ method: "GET", path, handler: propertyKey });
    Reflect.defineMetadata(ROUTES_METADATA, routes, target);
  };
}

function Post(path: string = "") {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const routes: RouteMetadata[] = Reflect.getMetadata(ROUTES_METADATA, target) || [];
    routes.push({ method: "POST", path, handler: propertyKey });
    Reflect.defineMetadata(ROUTES_METADATA, routes, target);
  };
}

function Put(path: string = "") {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const routes: RouteMetadata[] = Reflect.getMetadata(ROUTES_METADATA, target) || [];
    routes.push({ method: "PUT", path, handler: propertyKey });
    Reflect.defineMetadata(ROUTES_METADATA, routes, target);
  };
}

function Delete(path: string = "") {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const routes: RouteMetadata[] = Reflect.getMetadata(ROUTES_METADATA, target) || [];
    routes.push({ method: "DELETE", path, handler: propertyKey });
    Reflect.defineMetadata(ROUTES_METADATA, routes, target);
  };
}

// Solution: Parameter decorators
function Param(name: string) {
  return function (target: any, propertyKey: string, parameterIndex: number) {
    const params: ParamMetadata[] = Reflect.getMetadata(PARAM_METADATA, target, propertyKey) || [];
    params.push({ index: parameterIndex, type: "param", name });
    Reflect.defineMetadata(PARAM_METADATA, params, target, propertyKey);
  };
}

function Body() {
  return function (target: any, propertyKey: string, parameterIndex: number) {
    const params: ParamMetadata[] = Reflect.getMetadata(PARAM_METADATA, target, propertyKey) || [];
    params.push({ index: parameterIndex, type: "body" });
    Reflect.defineMetadata(PARAM_METADATA, params, target, propertyKey);
  };
}

function Query(name: string) {
  return function (target: any, propertyKey: string, parameterIndex: number) {
    const params: ParamMetadata[] = Reflect.getMetadata(PARAM_METADATA, target, propertyKey) || [];
    params.push({ index: parameterIndex, type: "query", name });
    Reflect.defineMetadata(PARAM_METADATA, params, target, propertyKey);
  };
}

// Solution: Example controller
@Controller("/api/users")
class UserController {
  private users = [
    { id: 1, name: "Alice", email: "alice@test.com" },
    { id: 2, name: "Bob", email: "bob@test.com" }
  ];

  @Get("/")
  getUsers(@Query("sort") sort?: string) {
    console.log("Sort param:", sort);
    return this.users;
  }

  @Get("/:id")
  getUser(@Param("id") id: string) {
    const userId = parseInt(id);
    return this.users.find(u => u.id === userId);
  }

  @Post("/")
  createUser(@Body() body: any) {
    const newUser = { id: this.users.length + 1, ...body };
    this.users.push(newUser);
    return newUser;
  }

  @Put("/:id")
  updateUser(@Param("id") id: string, @Body() body: any) {
    const userId = parseInt(id);
    const index = this.users.findIndex(u => u.id === userId);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...body };
      return this.users[index];
    }
    return { error: "User not found" };
  }

  @Delete("/:id")
  deleteUser(@Param("id") id: string) {
    const userId = parseInt(id);
    const index = this.users.findIndex(u => u.id === userId);
    if (index !== -1) {
      this.users.splice(index, 1);
      return { success: true };
    }
    return { error: "User not found" };
  }
}

// Solution: Server creator
function createServer(controller: any) {
  const routes: RouteMetadata[] = Reflect.getMetadata(ROUTES_METADATA, controller) || [];
  const basePath = controller.constructor.basePath || "";
  
  const server = {
    get: (path: string, handler: Function) => {
      console.log(`Registered GET ${basePath}${path}`);
    },
    post: (path: string, handler: Function) => {
      console.log(`Registered POST ${basePath}${path}`);
    },
    put: (path: string, handler: Function) => {
      console.log(`Registered PUT ${basePath}${path}`);
    },
    delete: (path: string, handler: Function) => {
      console.log(`Registered DELETE ${basePath}${path}`);
    },
    listen: (port: number) => {
      console.log(`Server listening on port ${port}`);
      
      // Simulate requests
      console.log("\n--- Simulated Requests ---");
      
      routes.forEach(route => {
        console.log(`${route.method} ${basePath}${route.path} -> ${route.handler}`);
      });
    }
  };

  // Register routes
  routes.forEach(route => {
    const handler = controller[route.handler].bind(controller);
    
    switch (route.method) {
      case "GET":
        server.get(route.path, handler);
        break;
      case "POST":
        server.post(route.path, handler);
        break;
      case "PUT":
        server.put(route.path, handler);
        break;
      case "DELETE":
        server.delete(route.path, handler);
        break;
    }
  });

  return server;
}

// Test
const controller = new UserController();
const server = createServer(controller);
server.listen(3000);

// Simulate a request with parameter extraction
function simulateRequest(handler: Function, ...args: any[]) {
  console.log("\nHandler result:", handler(...args));
}

const userController = new UserController();
console.log("\n--- Handler Results ---");
console.log("GET /:id (id=1):", userController.getUser("1"));
console.log("GET / with sort=name:", userController.getUsers("name"));
console.log("POST / with body:", userController.createUser({ name: "Charlie", email: "charlie@test.com" }));