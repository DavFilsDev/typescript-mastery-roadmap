/**
 * PRIMITIVE TYPES
 * string, number, boolean - the building blocks
 */

// STRINGS - for text, URLs, names
let username: string = "john_doe";
let email = "user@example.com"; // Type inference
let description = `Username: ${username}`; // Template strings

// Common web dev examples
let apiEndpoint: string = "https://api.example.com/users";
let errorMessage: string = "Not found";
let cssClass: string = "btn-primary";

// NUMBERS - for IDs, prices, counts
let userId: number = 12345;
let price = 29.99; // Float
let port: number = 3000;
let timestamp: number = Date.now(); // Millisecond timestamp

// BOOLEAN - for flags, toggles
let isLoggedIn: boolean = false;
let hasPermission = true;
let isLoading: boolean = false;
let isDarkMode: boolean = true;

// Practical example: User status
let userStatus: string = "active";
let loginAttempts: number = 0;
let isBlocked: boolean = false;

// TypeScript catches mistakes
// username = 123; // Error: number not assignable to string
// isLoggedIn = "true"; // Error: string not assignable to boolean