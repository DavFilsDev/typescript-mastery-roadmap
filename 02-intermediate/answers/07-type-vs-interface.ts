/**
 * EXERCISE 7: Type vs Interface - SOLUTION
 */

// Solution: Type for union
type ID = string | number;

// Solution: Interface for Person
interface Person {
  name: string;
  age: number;
}

// Solution: Type for union of status
type OrderStatus = "pending" | "approved" | "rejected" | "cancelled";

// Solution: Interface extending Person
interface Order extends Person {
  orderId: number;
  items: string[];
  status: OrderStatus;
  total: number;
}

// Solution: Type for function
type MathOperation = (a: number, b: number) => number;

// Solution: Employee interface
interface Employee {
  employeeId: number;
  department: string;
}

// Solution: Intersection type
type EmployeePerson = Person & Employee;

// Solution: Type for tuple
type Point = [number, number];

// Solution: Interface with methods
interface Counter {
  count: number;
  increment(): void;
  decrement(): void;
  reset(): void;
}

// Test
console.log("=== Type vs Interface Examples ===");

// Test union type
const id1: ID = 123;
const id2: ID = "ABC123";
console.log("ID examples:", id1, id2);

// Test interface
const person: Person = { name: "Alice", age: 25 };
console.log("Person:", person);

// Test union status
const status: OrderStatus = "pending";
console.log("Status:", status);

// Test extended interface
const order: Order = {
  name: "Bob",
  age: 30,
  orderId: 1001,
  items: ["Laptop", "Mouse"],
  status: "approved",
  total: 1028
};
console.log("Order:", order);

// Test function type
const add: MathOperation = (a, b) => a + b;
console.log("Add:", add(5, 3));

// Test intersection
const employee: EmployeePerson = {
  name: "Charlie",
  age: 35,
  employeeId: 12345,
  department: "Engineering"
};
console.log("Employee:", employee);

// Test tuple
const point: Point = [10, 20];
console.log("Point:", point);

// Test interface with methods
class SimpleCounter implements Counter {
  count = 0;
  
  increment() {
    this.count++;
  }
  
  decrement() {
    this.count--;
  }
  
  reset() {
    this.count = 0;
  }
}

const counter = new SimpleCounter();
counter.increment();
counter.increment();
console.log("Counter:", counter.count);
counter.reset();
console.log("After reset:", counter.count);

// Key differences demonstration
console.log("\n=== Key Differences ===");

// 1. Type can do unions, interfaces can't
type Status = "active" | "inactive" | "pending";

// 2. Interface can be extended multiple times
interface Animal {
  name: string;
}
interface Animal {
  age: number;
} // Merges with above
const animal: Animal = { name: "Rex", age: 3 };

// 3. Type can use computed properties
const key = "dynamic" as const;
type DynamicObject = {
  [key]: string;
};