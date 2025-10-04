/**
 * EXERCISE 1: E-commerce Interfaces
 * 
 * Create interfaces for an e-commerce system
 */

// TODO: Create a Product interface with:
// - id (number)
// - name (string)
// - price (number)
// - category (string)
// - inStock (boolean)
// - rating?: number (optional)


// TODO: Create a Customer interface with:
// - id (number)
// - name (string)
// - email (string)
// - loyaltyPoints (number)


// TODO: Create an Order interface that includes:
// - id (number)
// - customer (Customer)
// - products (Product array)
// - totalPrice (number)
// - status: "pending" | "shipped" | "delivered" | "cancelled"


// TODO: Create a function that calculates the total price of an order
// (sum of all product prices)
function calculateOrderTotal(products: any[]): number {
  // Your code here
  return 0;
}

// TODO: Create a function that filters products by category
function filterByCategory(products: any[], category: string): any[] {
  // Your code here
  return [];
}

// Test data
const sampleProducts = [
  { id: 1, name: "Laptop", price: 999, category: "electronics", inStock: true, rating: 4.5 },
  { id: 2, name: "Mouse", price: 29, category: "electronics", inStock: false },
  { id: 3, name: "Shirt", price: 39, category: "clothing", inStock: true }
];

const sampleCustomer = { id: 1, name: "Alice", email: "alice@test.com", loyaltyPoints: 100 };