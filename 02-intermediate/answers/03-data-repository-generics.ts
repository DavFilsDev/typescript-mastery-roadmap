/**
 * EXERCISE 3: Generic Data Repository - SOLUTION
 */

// Solution: Generic Repository class
class Repository<T extends { id: number | string }> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return [...this.items];
  }

  getById(id: number | string): T | undefined {
    return this.items.find(item => item.id === id);
  }

  remove(id: number | string): void {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`Item with id ${id} removed.`);
    }
  }

  update(id: number | string, updatedItem: Partial<T>): T | undefined {
    const item = this.getById(id);
    if (item) {
      Object.assign(item, updatedItem);
      return item;
    }
    return undefined;
  }

  count(): number {
    return this.items.length;
  }
}

// Types
type User = {
  id: number;
  name: string;
  email: string;
};

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
};

// Solution: Generic function for unique values
function getUniqueValues<T, K extends keyof T>(items: T[], property: K): T[K][] {
  const values = items.map(item => item[property]);
  return [...new Set(values)];
}

// Test User repository
const userRepo = new Repository<User>();
userRepo.add({ id: 1, name: "Alice", email: "alice@test.com" });
userRepo.add({ id: 2, name: "Bob", email: "bob@test.com" });
userRepo.add({ id: 3, name: "Charlie", email: "charlie@test.com" });

console.log("All users:", userRepo.getAll());
console.log("User with id 1:", userRepo.getById(1));
userRepo.remove(2);
console.log("After removal:", userRepo.getAll());

// Test update
userRepo.update(1, { email: "alice@newdomain.com" });
console.log("Updated user:", userRepo.getById(1));

// Test Product repository
const productRepo = new Repository<Product>();
const products: Product[] = [
  { id: 1, name: "Laptop", price: 999, category: "electronics" },
  { id: 2, name: "Mouse", price: 29, category: "electronics" },
  { id: 3, name: "Shirt", price: 39, category: "clothing" }
];

products.forEach(p => productRepo.add(p));

// Test getUniqueValues
console.log("Unique categories:", getUniqueValues(products, "category")); // ["electronics", "clothing"]
console.log("Unique prices:", getUniqueValues(products, "price")); // [999, 29, 39]

// Bonus: Filter by property
function filterByProperty<T, K extends keyof T>(
  items: T[], 
  property: K, 
  value: T[K]
): T[] {
  return items.filter(item => item[property] === value);
}

console.log("Electronics:", filterByProperty(products, "category", "electronics"));
console.log("Products under $50:", filterByProperty(products, "price", 39));