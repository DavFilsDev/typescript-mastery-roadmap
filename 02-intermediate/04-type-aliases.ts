/**
 * TYPE ALIASES vs INTERFACES
 * Creating custom types
 */

// Type alias for primitive
type UserID = string | number;
let id: UserID = "abc123";
id = 456; // Also valid

// Type alias for object
type Person = {
  name: string;
  age: number;
  email?: string;
};

const john: Person = {
  name: "John",
  age: 30,
  email: "john@example.com"
};

// Type alias for union
type Status = "pending" | "approved" | "rejected";
let orderStatus: Status = "pending";
// orderStatus = "cancelled"; // Error

// Type alias for function
type MathOperation = (x: number, y: number) => number;

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;

console.log(add(5, 3)); // 8

// Type alias for complex types
type Point = {
  x: number;
  y: number;
};

type Shape = {
  points: Point[];
  color: string;
  border?: number;
};

const triangle: Shape = {
  points: [
    { x: 0, y: 0 },
    { x: 10, y: 0 },
    { x: 5, y: 10 }
  ],
  color: "red"
};

// INTERFACE vs TYPE - key differences

// Interface can be extended
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}

// Type can use unions and intersections
type A = { a: string };
type B = { b: number };
type C = A & B; // Intersection (both properties)
type D = string | number; // Union (can't do this with interface)

// Interface can be merged (declaration merging)
interface User {
  name: string;
}
interface User {
  age: number;
}
// User now has both name and age

// When to use what?
// - Use interface for object shapes, especially for APIs
// - Use type for unions, primitives, and complex combinations