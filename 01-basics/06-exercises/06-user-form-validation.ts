/**
 * EXERCISE 6: Form Validation
 * 
 * Practice with objects and type checking
 */

// TODO: Create a UserForm interface with:
// - username (string, min 3 chars)
// - email (string, must contain @)
// - age (number, between 18-120)
// - subscribe (boolean, optional)


// TODO: Create a validation function that checks:
// - username length >= 3
// - email includes '@'
// - age between 18-120
// Returns: { isValid: boolean; errors: string[] }
function validateUser(form: any): { isValid: boolean; errors: string[] } {
  // Your code here
  return { isValid: false, errors: [] };
}

// Test cases
const validUser = {
  username: "john_doe",
  email: "john@example.com",
  age: 25,
  subscribe: true
};

const invalidUser = {
  username: "jo",
  email: "invalid-email",
  age: 15
};

console.log(validateUser(validUser));   // { isValid: true, errors: [] }
console.log(validateUser(invalidUser)); // { isValid: false, errors: [...] }