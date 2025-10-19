/**
 * EXERCISE 2: Conditional Form Validator
 * 
 * Create a type-safe form validation system using conditional types
 */

// TODO: Create a ValidationRule type that can be:
// - "required"
// - { minLength: number }
// - { maxLength: number }
// - { pattern: RegExp }
// - { email: true }
// - Or a combination of these


// TODO: Create a conditional type Validator<T> that:
// - Takes a form type T
// - Returns an object with the same keys
// - Each value is an array of ValidationRule based on the property type:
//   - string: can have any string rules
//   - number: can have min/max rules
//   - boolean: can have required rule
//   - email field: automatically adds email validation


// TODO: Create a validate function that:
// - Takes form data and validation rules
// - Returns { isValid: boolean, errors: Record<keyof T, string[]> }


interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

// Test your implementation
// const rules: Validator<LoginForm> = {
//   email: ["required", { email: true }],
//   password: ["required", { minLength: 8 }],
//   rememberMe: ["required"]
// };