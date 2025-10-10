/**
 * EXERCISE 1: E-commerce Interfaces - SOLUTION
 */

// Solution: Product interface
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  rating?: number;
}

// Solution: Customer interface
interface Customer {
  id: number;
  name: string;
  email: string;
  loyaltyPoints: number;
}

// Solution: Order interface
interface Order {
  id: number;
  customer: Customer;
  products: Product[];
  totalPrice: number;
  status: "pending" | "shipped" | "delivered" | "cancelled";
}

// Solution: Calculate order total
function calculateOrderTotal(products: Product[]): number {
  return products.reduce((total, product) => total + product.price, 0);
}

// Solution: Filter by category
function filterByCategory(products: Product[], category: string): Product[] {
  return products.filter(product => product.category === category);
}

// Test data
const sampleProducts: Product[] = [
  { id: 1, name: "Laptop", price: 999, category: "electronics", inStock: true, rating: 4.5 },
  { id: 2, name: "Mouse", price: 29, category: "electronics", inStock: false },
  { id: 3, name: "Shirt", price: 39, category: "clothing", inStock: true }
];

const sampleCustomer: Customer = { 
  id: 1, 
  name: "Alice", 
  email: "alice@test.com", 
  loyaltyPoints: 100 
};

// Test
const order: Order = {
  id: 101,
  customer: sampleCustomer,
  products: [sampleProducts[0], sampleProducts[2]],
  totalPrice: calculateOrderTotal([sampleProducts[0], sampleProducts[2]]),
  status: "pending"
};

console.log("Order:", order);
console.log("Electronics:", filterByCategory(sampleProducts, "electronics"));
console.log("In-stock:", sampleProducts.filter(p => p.inStock));

// Bonus: Function to check if customer can buy (loyalty points > 50)
function canUseLoyalty(customer: Customer, minPoints: number = 50): boolean {
  return customer.loyaltyPoints >= minPoints;
}

console.log("Can use loyalty:", canUseLoyalty(sampleCustomer)); // true