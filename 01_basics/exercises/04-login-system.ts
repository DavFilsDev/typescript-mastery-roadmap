/**
 * EXERCISE 4: Login System
 * 
 * Practice union types and optional parameters
 */

// TODO: Create a union type called 'LoginStatus'
// Can be: "success", "error", "loading", "idle"


// TODO: Create a function that returns a message based on login status
// - "success" -> "Welcome back!"
// - "error" -> "Login failed. Try again."
// - "loading" -> "Logging in..."
// - "idle" -> "Please enter your credentials"
function getLoginMessage(status: any): string {
  // Your code here
  return "";
}

// TODO: Create a login function that takes:
// - username (string, required)
// - password (string, required)
// - rememberMe (boolean, optional)
// Returns a LoginStatus
function login(username: string, password: string, rememberMe?: boolean): any {
  // For now, just simulate:
  // If username and password are not empty -> return "success"
  // Else -> return "error"
  
  // Your code here
  return "idle";
}

// Test your code
console.log(getLoginMessage("success"));    // "Welcome back!"
console.log(getLoginMessage("loading"));    // "Logging in..."
console.log(login("user", "pass"));         // "success"
console.log(login("", ""));                  // "error"