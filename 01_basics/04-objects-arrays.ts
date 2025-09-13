/**
 * OBJECTS & ARRAYS
 * Typing objects, arrays, and nested structures
 */

// ARRAYS - collections of same type
let users: string[] = ["Alice", "Bob", "Charlie"];
let scores: number[] = [85, 92, 78];
let isActive: boolean[] = [true, false, true];

// Alternative syntax (generic)
let products: Array<string> = ["Laptop", "Mouse", "Keyboard"];

// Multi-type arrays (union)
let mixed: (string | number)[] = ["Apple", 42, "Banana", 100];

// OBJECTS - defining shape
let person: { name: string; age: number; email: string } = {
  name: "John",
  age: 30,
  email: "john@example.com"
};

// Optional properties
let config: { theme: string; darkMode?: boolean } = {
  theme: "blue",
  // darkMode is optional
};

// Nested objects (common in API responses)
let userProfile: {
  id: number;
  personal: {
    firstName: string;
    lastName: string;
  };
  settings: {
    theme: string;
    notifications: boolean;
  };
} = {
  id: 1,
  personal: {
    firstName: "John",
    lastName: "Doe"
  },
  settings: {
    theme: "dark",
    notifications: true
  }
};

// Array of objects (very common in web dev)
let productList: { id: number; name: string; price: number }[] = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Mouse", price: 29 },
  { id: 3, name: "Keyboard", price: 89 }
];

// Access patterns
console.log(users[0]); // First user
console.log(person.name); // Object property
console.log(productList[1].price); // Nested access