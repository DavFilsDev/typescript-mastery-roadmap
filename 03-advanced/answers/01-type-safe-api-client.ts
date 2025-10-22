/**
 * EXERCISE 1: Type-Safe API Client - SOLUTION
 */

// Solution: ApiResponse type
type ApiResponse<T> = 
  | { data: T; status: 200 | 201 }
  | { error: string; status: 400 | 404 | 500 }
  | { status: 102 };

// Solution: Generic apiRequest function
async function apiRequest<T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE"
): Promise<ApiResponse<T>> {
  try {
    // Simulate API call
    console.log(`Making ${method} request to ${url}`);
    
    // Mock responses
    if (url.includes("users") && method === "GET") {
      return {
        data: [
          { id: 1, name: "Alice", email: "alice@test.com" },
          { id: 2, name: "Bob", email: "bob@test.com" }
        ] as T,
        status: 200
      };
    }
    
    if (url.includes("users/1") && method === "GET") {
      return {
        data: { id: 1, name: "Alice", email: "alice@test.com" } as T,
        status: 200
      };
    }
    
    return { error: "Not found", status: 404 };
  } catch (error) {
    return { error: "Server error", status: 500 };
  }
}

interface User {
  id: number;
  name: string;
  email: string;
}

// Solution: Specific API functions
async function getUsers(): Promise<ApiResponse<User[]>> {
  return apiRequest<User[]>("/api/users", "GET");
}

async function getUser(id: number): Promise<ApiResponse<User>> {
  return apiRequest<User>(`/api/users/${id}`, "GET");
}

async function createUser(userData: Omit<User, "id">): Promise<ApiResponse<User>> {
  // In real app, this would be a POST request
  return apiRequest<User>("/api/users", "POST");
}

// Test
async function test() {
  const usersResponse = await getUsers();
  if ("data" in usersResponse) {
    console.log("Users:", usersResponse.data);
  }
  
  const userResponse = await getUser(1);
  if ("data" in userResponse) {
    console.log("User:", userResponse.data);
  }
}

test();

// Bonus: Type guard
function isSuccess<T>(response: ApiResponse<T>): response is { data: T; status: 200 | 201 } {
  return "data" in response;
}

function isError<T>(response: ApiResponse<T>): response is { error: string; status: 400 | 404 | 500 } {
  return "error" in response;
}