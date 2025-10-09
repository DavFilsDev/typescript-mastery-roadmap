/**
 * EXERCISE 3: Generic Data Repository
 * 
 * Create a generic repository for data management
 */

// TODO: Create a generic Repository<T> class that manages items of type T
// - items: T[] (private)
// - add(item: T): void
// - getAll(): T[]
// - getById(id: number | string): T | undefined (items must have an 'id' property)
// - remove(id: number | string): void


// TODO: Create a User type with id, name, email


// TODO: Create a Product type with id, name, price


// TODO: Create a generic function that takes an array and a property name
// and returns an array of unique values for that property
function getUniqueValues<T, K extends keyof T>(items: T[], property: K): T[K][] {
  // Your code here
  return [];
}


// Test with User repository
// const userRepo = new Repository<User>();
// userRepo.add({ id: 1, name: "Alice", email: "alice@test.com" });
// userRepo.add({ id: 2, name: "Bob", email: "bob@test.com" });
// console.log(userRepo.getById(1)); // Should find Alice
// userRepo.remove(1);
// console.log(userRepo.getAll()); // Should only have Bob

// Test getUniqueValues
// const products = [
//   { id: 1, name: "Laptop", category: "electronics", price: 999 },
//   { id: 2, name: "Mouse", category: "electronics", price: 29 },
//   { id: 3, name: "Shirt", category: "clothing", price: 39 }
// ];
// console.log(getUniqueValues(products, "category")); // ["electronics", "clothing"]