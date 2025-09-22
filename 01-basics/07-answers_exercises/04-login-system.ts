/**
 * EXERCISE 4: Login System - SOLUTION
 */

// Solution: Create LoginStatus union type
type LoginStatus = "success" | "error" | "loading" | "idle";

// Solution: Get message based on status
function getLoginMessage(status: LoginStatus): string {
  switch (status) {
    case "success":
      return "Welcome back!";
    case "error":
      return "Login failed. Try again.";
    case "loading":
      return "Logging in...";
    case "idle":
      return "Please enter your credentials";
    default:
      return "Unknown status";
  }
}

// Solution: Login function
function login(username: string, password: string, rememberMe?: boolean): LoginStatus {
  // Simple validation
  if (username.trim() !== "" && password.trim() !== "") {
    console.log(rememberMe ? "Remembering user..." : "Session only");
    return "success";
  } else {
    return "error";
  }
}

// Test
console.log(getLoginMessage("success"));    // "Welcome back!"
console.log(getLoginMessage("loading"));    // "Logging in..."
console.log(login("user", "pass"));         // "success"
console.log(login("user", "pass", true));   // "success" with "Remembering user..."
console.log(login("", ""));                  // "error"

// Bonus: Using ternary for rememberMe
const loginStatus = login("alice", "12345", true);
console.log(`Login status: ${loginStatus} - ${getLoginMessage(loginStatus)}`);