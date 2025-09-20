/**
 * EXERCISE 3: Shopping Cart - SOLUTION
 */

// Solution: Create a type for product
type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

// Solution: Create an array of products
const products: Product[] = [
  { id: 1, name: "Laptop", price: 999, inStock: true },
  { id: 2, name: "Mouse", price: 29, inStock: false },
  { id: 3, name: "Keyboard", price: 89, inStock: true },
  { id: 4, name: "Monitor", price: 299, inStock: true },
  { id: 5, name: "Headphones", price: 79, inStock: false }
];

// Solution: Get in-stock products
function getInStockProducts(products: Product[]): Product[] {
  return products.filter(product => product.inStock);
}

// Solution: Calculate total price of in-stock products
function calculateTotal(products: Product[]): number {
  return products
    .filter(product => product.inStock)
    .reduce((total, product) => total + product.price, 0);
}

// Test
console.log("In-stock products:", getInStockProducts(products));
console.log("Total price:", calculateTotal(products)); // 999 + 89 + 299 = 1387

// Bonus: Format as currency
console.log(`Total: $${calculateTotal(products).toFixed(2)}`);