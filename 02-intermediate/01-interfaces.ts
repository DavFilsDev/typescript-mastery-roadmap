/**
 * INTERFACES
 * Defining shapes of objects
 */

// Basic interface
interface User {
  name: string;
  email: string;
  age: number;
}

const user: User = {
  name: "Alice",
  email: "alice@example.com",
  age: 25
};

// Optional properties
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // Optional
}

const laptop: Product = {
  id: 1,
  name: "Laptop",
  price: 999
  // description is optional
};

// Readonly properties
interface Config {
  readonly apiKey: string;
  readonly endpoint: string;
}

const config: Config = {
  apiKey: "abc123",
  endpoint: "https://api.example.com"
};
// config.apiKey = "newkey"; // Error: readonly

// Methods in interfaces
interface Counter {
  count: number;
  increment(): void;
  reset(): void;
}

const counter: Counter = {
  count: 0,
  increment() {
    this.count++;
  },
  reset() {
    this.count = 0;
  }
};

// Extending interfaces
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
  bark(): void;
}

const myDog: Dog = {
  name: "Rex",
  age: 3,
  breed: "German Shepherd",
  bark() {
    console.log("Woof!");
  }
};