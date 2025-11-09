/**
 * EXERCISE 6: Generic Cache System - SOLUTION
 */

// Solution: CacheItem interface
interface CacheItem<T> {
  value: T;
  expiresAt?: number;
}

// Solution: GenericCache class
class GenericCache<T> {
  private cache: Map<string, CacheItem<T>> = new Map();

  set(key: string, value: T, ttl?: number): void {
    const item: CacheItem<T> = { value };
    
    if (ttl) {
      item.expiresAt = Date.now() + ttl;
    }
    
    this.cache.set(key, item);
    console.log(`Cached: ${key}`);
  }

  get(key: string): T | null {
    this.cleanup();
    
    const item = this.cache.get(key);
    if (!item) return null;
    
    // Check expiration
    if (item.expiresAt && item.expiresAt < Date.now()) {
      this.cache.delete(key);
      return null;
    }
    
    return item.value;
  }

  has(key: string): boolean {
    return this.get(key) !== null;
  }

  clear(): void {
    this.cache.clear();
    console.log("Cache cleared");
  }

  getSize(): number {
    this.cleanup();
    return this.cache.size;
  }

  getAll(): Record<string, T> {
    this.cleanup();
    const result: Record<string, T> = {};
    this.cache.forEach((item, key) => {
      result[key] = item.value;
    });
    return result;
  }

  private cleanup(): void {
    const now = Date.now();
    this.cache.forEach((item, key) => {
      if (item.expiresAt && item.expiresAt < now) {
        this.cache.delete(key);
        console.log(`Removed expired: ${key}`);
      }
    });
  }
}

// Types
interface User {
  id: number;
  name: string;
  email: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

// Test
const userCache = new GenericCache<User>();

console.log("=== User Cache ===");
userCache.set("user1", { id: 1, name: "Alice", email: "alice@test.com" }, 5000);
userCache.set("user2", { id: 2, name: "Bob", email: "bob@test.com" });

console.log("User1:", userCache.get("user1"));
console.log("Has user2:", userCache.has("user2"));
console.log("Cache size:", userCache.getSize());

// Wait and test expiration
setTimeout(() => {
  console.log("\nAfter 6 seconds:");
  console.log("User1 (should be null):", userCache.get("user1"));
  console.log("User2:", userCache.get("user2"));
  console.log("Cache size:", userCache.getSize());
}, 6000);

// Product cache
const productCache = new GenericCache<Product>();

console.log("\n=== Product Cache ===");
productCache.set("product1", { id: 101, name: "Laptop", price: 999 });
productCache.set("product2", { id: 102, name: "Mouse", price: 29 }, 3000);

console.log("All products:", productCache.getAll());

// Bonus: Cache statistics
class CacheWithStats<T> extends GenericCache<T> {
  private hits = 0;
  private misses = 0;

  override get(key: string): T | null {
    const value = super.get(key);
    if (value !== null) {
      this.hits++;
    } else {
      this.misses++;
    }
    return value;
  }

  getStats() {
    return {
      hits: this.hits,
      misses: this.misses,
      hitRate: this.hits / (this.hits + this.misses) || 0
    };
  }
}