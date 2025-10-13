/**
 * ADVANCED GENERICS
 * Constraints, defaults, and type parameters
 */

// Generic constraints with extends
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): T {
  console.log(`Length: ${item.length}`);
  return item;
}

logLength("hello"); // string has length
logLength([1, 2, 3]); // array has length
// logLength(123); // Error: number has no length

// Keyof constraint
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Alice", age: 25, email: "alice@test.com" };
console.log(getProperty(user, "name")); // "Alice"
// getProperty(user, "invalid"); // Error

// Generic with default type
class ApiResponse<T = any> {
  constructor(
    public data: T,
    public status: number,
    public message: string
  ) {}

  isSuccess(): boolean {
    return this.status >= 200 && this.status < 300;
  }
}

const response1 = new ApiResponse({ user: "Alice" }, 200, "OK");
const response2 = new ApiResponse("Simple string", 404, "Not Found");

// Multiple type parameters
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const merged = mergeObjects({ name: "Alice" }, { age: 25 });
console.log(merged); // { name: "Alice", age: 25 }

// Generic factory pattern
class Factory<T> {
  constructor(private type: new () => T) {}

  create(): T {
    return new this.type();
  }
}

class Product {
  constructor(public name: string = "Default Product") {}
}

const productFactory = new Factory(Product);
const product = productFactory.create();
console.log(product.name); // "Default Product"

// Conditional generic
type ArrayOrSingle<T, UseArray extends boolean> = UseArray extends true ? T[] : T;

function makeArray<T>(value: T, useArray: true): T[];
function makeArray<T>(value: T, useArray: false): T;
function makeArray<T>(value: T, useArray: boolean): T | T[] {
  return useArray ? [value] : value;
}

const single = makeArray("hello", false); // string
const arr = makeArray("hello", true); // string[]