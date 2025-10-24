/**
 * EXERCISE 3: Entity Mapper - SOLUTION
 */

// Solution: Base Entity
interface BaseEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

// Solution: User entity
interface Profile {
  firstName: string;
  lastName: string;
  age?: number;
}

interface User extends BaseEntity {
  email: string;
  password: string;
  profile: Profile;
}

// Solution: ToDTO mapped type
type ToDTO<T> = {
  readonly [P in keyof T as P extends "password" ? never : P]: 
    T[P] extends Date ? string 
    : T[P] extends object ? ToDTO<T[P]>
    : T[P];
};

// Solution: ToCreateDTO mapped type
type ToCreateDTO<T> = {
  [P in keyof T as P extends "id" | "createdAt" | "updatedAt" ? never : P]: 
    T[P] extends object ? ToCreateDTO<T[P]> : T[P];
};

// Solution: Mapper function
function mapToDTO<T extends object>(entity: T): ToDTO<T> {
  const dto = {} as ToDTO<T>;
  
  for (const key in entity) {
    if (key === "password") continue;
    
    const value = entity[key];
    
    if (value instanceof Date) {
      (dto as any)[key] = value.toISOString();
    } else if (typeof value === "object" && value !== null) {
      (dto as any)[key] = mapToDTO(value);
    } else {
      (dto as any)[key] = value;
    }
  }
  
  return dto;
}

// Test
const user: User = {
  id: 1,
  email: "alice@test.com",
  password: "secret123",
  createdAt: new Date("2024-01-01"),
  updatedAt: new Date("2024-01-02"),
  profile: {
    firstName: "Alice",
    lastName: "Johnson",
    age: 30
  }
};

const userDTO = mapToDTO(user);
console.log("DTO:", userDTO);
// Should have no password, dates as strings, readonly

const createData: ToCreateDTO<User> = {
  email: "bob@test.com",
  password: "newpass123",
  profile: {
    firstName: "Bob",
    lastName: "Smith"
    // age is optional
  }
};

console.log("Create DTO:", createData);

// Bonus: Deep readonly helper
function deepFreeze<T extends object>(obj: T): Readonly<T> {
  Object.freeze(obj);
  Object.values(obj).forEach(value => {
    if (typeof value === "object" && value !== null) {
      deepFreeze(value);
    }
  });
  return obj;
}

const frozen = deepFreeze(userDTO);
// frozen.email = "new@test.com"; // Error in strict mode