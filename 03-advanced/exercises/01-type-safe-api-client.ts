/**
 * EXERCISE 1: Type-Safe API Client
 * 
 * Create a type-safe API client using advanced generics
 */

// TODO: Create a generic ApiResponse type that can be:
// - Success: { data: T, status: 200 | 201 }
// - Error: { error: string, status: 400 | 404 | 500 }
// - Loading: { status: 102 }


// TODO: Create a generic apiRequest function that:
// - Takes a URL and method
// - Returns a Promise with the appropriate ApiResponse type
// - Use generics to type the response data


// TODO: Create specific API functions using your generic client:
// - getUsers(): Promise<ApiResponse<User[]>>
// - getUser(id: number): Promise<ApiResponse<User>>
// - createUser(user: Omit<User, "id">): Promise<ApiResponse<User>>

interface User {
  id: number;
  name: string;
  email: string;
}

// Test your implementation
// const users = await getUsers();
// const user = await getUser(1);