/**
 * FUNCTIONS
 * Parameter types, return types, async functions
 */

// Basic function with typed parameters and return
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Arrow function syntax
const add = (a: number, b: number): number => {
  return a + b;
};

// Void return (no return value)
function logUserAction(action: string): void {
  console.log(`User performed: ${action}`);
}

// Optional parameters
function createUser(name: string, age?: number): object {
  return {
    name,
    age: age || null, // Default if not provided
    createdAt: new Date()
  };
}

// Default parameters
function fetchUser(id: number = 1): string {
  return `Fetching user with id: ${id}`;
}

// Async functions (common in web dev)
async function getData(url: string): Promise<object> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Function with multiple parameters
function displayUser(name: string, age: number, isAdmin: boolean): string {
  return `${name} (${age}) - ${isAdmin ? 'Admin' : 'User'}`;
}

// Call examples
console.log(greet("Alice"));
console.log(add(5, 3));
logUserAction("login");
console.log(createUser("Bob"));
console.log(fetchUser(42));