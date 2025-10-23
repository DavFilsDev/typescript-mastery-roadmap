/**
 * EXERCISE 2: Conditional Form Validator - SOLUTION
 */

// Solution: ValidationRule type
type ValidationRule = 
  | "required"
  | { minLength: number }
  | { maxLength: number }
  | { pattern: RegExp }
  | { email: true }
  | { min: number }
  | { max: number };

// Solution: Conditional Validator type
type Validator<T> = {
  [K in keyof T]: ValidationRule[];
};

// Solution: Email validator helper
function isEmailField(key: string): boolean {
  return key.toLowerCase().includes("email");
}

// Solution: Validate function
function validate<T extends Record<string, any>>(
  formData: T,
  rules: Validator<T>
): { isValid: boolean; errors: Record<keyof T, string[]> } {
  const errors = {} as Record<keyof T, string[]>;
  let isValid = true;

  for (const field in rules) {
    const fieldRules = rules[field];
    const value = formData[field];
    const fieldErrors: string[] = [];

    for (const rule of fieldRules) {
      // Required check
      if (rule === "required") {
        if (value === undefined || value === null || value === "") {
          fieldErrors.push(`${String(field)} is required`);
        }
      }
      
      // Email check
      else if (typeof rule === "object" && "email" in rule && rule.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && !emailRegex.test(value)) {
          fieldErrors.push(`${String(field)} must be a valid email`);
        }
      }
      
      // MinLength check
      else if (typeof rule === "object" && "minLength" in rule) {
        if (value && value.length < rule.minLength) {
          fieldErrors.push(`${String(field)} must be at least ${rule.minLength} characters`);
        }
      }
      
      // MaxLength check
      else if (typeof rule === "object" && "maxLength" in rule) {
        if (value && value.length > rule.maxLength) {
          fieldErrors.push(`${String(field)} must be at most ${rule.maxLength} characters`);
        }
      }
      
      // Pattern check
      else if (typeof rule === "object" && "pattern" in rule) {
        if (value && !rule.pattern.test(value)) {
          fieldErrors.push(`${String(field)} format is invalid`);
        }
      }
      
      // Min check for numbers
      else if (typeof rule === "object" && "min" in rule) {
        if (typeof value === "number" && value < rule.min) {
          fieldErrors.push(`${String(field)} must be at least ${rule.min}`);
        }
      }
      
      // Max check for numbers
      else if (typeof rule === "object" && "max" in rule) {
        if (typeof value === "number" && value > rule.max) {
          fieldErrors.push(`${String(field)} must be at most ${rule.max}`);
        }
      }
    }

    if (fieldErrors.length > 0) {
      isValid = false;
      errors[field] = fieldErrors;
    } else {
      errors[field] = [];
    }
  }

  return { isValid, errors };
}

interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
  age?: number;
}

// Test
const rules: Validator<LoginForm> = {
  email: ["required", { email: true }],
  password: ["required", { minLength: 8 }],
  rememberMe: ["required"],
  age: [{ min: 18 }, { max: 120 }]
};

const validForm: LoginForm = {
  email: "test@example.com",
  password: "password123",
  rememberMe: true,
  age: 25
};

const invalidForm: LoginForm = {
  email: "invalid-email",
  password: "short",
  rememberMe: true,
  age: 15
};

console.log("Valid form:", validate(validForm, rules));
console.log("Invalid form:", validate(invalidForm, rules));