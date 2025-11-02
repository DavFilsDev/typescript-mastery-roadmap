/**
 * USING AXIOS WITH TYPES
 * Example of HTTP client with TypeScript
 * 
 * Install: npm install axios @types/axios
 */

import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

// Type definitions
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface CreatePostDto {
  title: string;
  body: string;
  userId: number;
}

// Custom API client with types
class ApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Request interceptor
    this.client.interceptors.request.use(
      config => {
        console.log(`Making request to: ${config.url}`);
        return config;
      },
      error => Promise.reject(error)
    );

    // Response interceptor
    this.client.interceptors.response.use(
      response => {
        console.log(`Response from: ${response.config.url} - Status: ${response.status}`);
        return response;
      },
      (error: AxiosError) => {
        console.error('API Error:', error.message);
        return Promise.reject(error);
      }
    );
  }

  // Typed GET request
  async getTodos(): Promise<Todo[]> {
    try {
      const response: AxiosResponse<Todo[]> = await this.client.get('/todos');
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getTodo(id: number): Promise<Todo> {
    try {
      const response: AxiosResponse<Todo> = await this.client.get(`/todos/${id}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Typed POST request
  async createPost(data: CreatePostDto): Promise<Post> {
    try {
      const response: AxiosResponse<Post> = await this.client.post('/posts', data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Typed PUT request
  async updatePost(id: number, data: Partial<CreatePostDto>): Promise<Post> {
    try {
      const response: AxiosResponse<Post> = await this.client.put(`/posts/${id}`, data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Typed DELETE request
  async deletePost(id: number): Promise<void> {
    try {
      await this.client.delete(`/posts/${id}`);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Error handling with type guards
  private handleError(error: unknown): Error {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // Server responded with error
        return new Error(`API Error ${error.response.status}: ${error.response.data.message || 'Unknown error'}`);
      } else if (error.request) {
        // No response received
        return new Error('No response received from server');
      } else {
        // Request setup error
        return new Error(`Request failed: ${error.message}`);
      }
    }
    return new Error('Unknown error occurred');
  }
}

// Usage example
async function runExamples() {
  const api = new ApiClient('https://jsonplaceholder.typicode.com');

  try {
    // GET todos
    const todos = await api.getTodos();
    console.log('First 3 todos:', todos.slice(0, 3));

    // GET single todo
    const todo = await api.getTodo(1);
    console.log('Todo #1:', todo);

    // POST new post
    const newPost = await api.createPost({
      title: 'TypeScript is awesome',
      body: 'Learning TypeScript with axios',
      userId: 1
    });
    console.log('Created post:', newPost);

    // PUT update
    const updated = await api.updatePost(1, {
      title: 'Updated title'
    });
    console.log('Updated post:', updated);

    // DELETE
    await api.deletePost(1);
    console.log('Post deleted successfully');

  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    }
  }
}

// Run if not in test environment
if (process.env.NODE_ENV !== 'test') {
  runExamples();
}

// Export for testing
export { ApiClient, Todo, Post, CreatePostDto };