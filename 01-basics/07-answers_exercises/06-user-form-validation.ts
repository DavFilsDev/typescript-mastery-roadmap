/**
 * EXERCISE 6: Form Validation - SOLUTION
 */

// Solution: UserForm interface
interface UserForm {
  username: string;
  email: string;
  age: number;
  subscribe?: boolean;
}

// Solution: Validation function
function validateUser(form: UserForm): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Validate username
  if (form.username.length < 3) {
    errors.push("Username must be at least 3 characters");
  }

  // Validate email
  if (!form.email.includes("@")) {
    errors.push("Email must contain @");
  }

  // Validate age
  if (form.age < 18 || form.age > 120) {
    errors.push("Age must be between 18 and 120");
  }

  return {
    isValid: errors.length === 0,
    errors: errors
  };
}

// Test cases
const validUser: UserForm = {
  username: "john_doe",
  email: "john@example.com",
  age: 25,
  subscribe: true
};

const invalidUser: UserForm = {
  username: "jo",
  email: "invalid-email",
  age: 15
};

const partialUser: UserForm = {
  username: "alice",
  email: "alice@test.com",
  age: 30
  // subscribe is optional
};

console.log("Valid user:", validateUser(validUser));     // { isValid: true, errors: [] }
console.log("Invalid user:", validateUser(invalidUser)); // { isValid: false, errors: [...] }
console.log("Partial user:", validateUser(partialUser)); // { isValid: true, errors: [] }

// Bonus: Display errors nicely
function displayValidation(result: { isValid: boolean; errors: string[] }): void {
  if (result.isValid) {
    console.log(" Form is valid!");
  } else {
    console.log(" Validation failed:");
    result.errors.forEach(err => console.log(`  • ${err}`));
  }
}

displayValidation(validateUser(invalidUser));