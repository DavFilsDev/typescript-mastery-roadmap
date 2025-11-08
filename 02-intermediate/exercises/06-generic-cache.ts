/**
 * EXERCISE 6: Generic Cache System
 * 
 * Create a generic cache system with expiration
 */

// TODO: Create a CacheItem<T> interface with:
// - value: T
// - expiresAt?: number (timestamp)


// TODO: Create a GenericCache<T> class that:
// - Stores items with string keys
// - Methods: set(key: string, value: T, ttl?: number): void
// - Methods: get(key: string): T | null
// - Methods: has(key: string): boolean
// - Methods: clear(): void
// - Methods: getSize(): number
// - Automatically removes expired items


// TODO: Create a UserCache that caches User objects
interface User {
  id: number;
  name: string;
  email: string;
}


// TODO: Create a ProductCache that caches Product objects
interface Product {
  id: number;
  name: string;
  price: number;
}


// Test your implementation
// const userCache = new GenericCache<User>();
// userCache.set("user1", { id: 1, name: "Alice", email: "alice@test.com" }, 5000);