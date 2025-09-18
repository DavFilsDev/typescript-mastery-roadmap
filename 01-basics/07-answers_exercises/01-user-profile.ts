/**
 * EXERCISE 1: User Profile - SOLUTION
 */

// Solution: Create variables for user profile
let name: string = "Alice Johnson";
let age: number = 25;
let email: string = "alice@example.com";
let isActive: boolean = true;
let loginCount: number = 10;

// Solution: Print formatted user info
console.log(`User ${name} is ${age} years old. Email: ${email}. Active: ${isActive}. Logins: ${loginCount}`);

// Alternative solution using an object
const user = {
  name: "Alice Johnson",
  age: 25,
  email: "alice@example.com",
  isActive: true,
  loginCount: 10
};

console.log(`User ${user.name} is ${user.age} years old. Email: ${user.email}. Active: ${user.isActive}. Logins: ${user.loginCount}`);