/**
 * EXERCISE 3: Entity Mapper
 * 
 * Create a mapped type system for transforming database entities to DTOs
 */

// TODO: Create a base Entity interface with id and timestamps
interface BaseEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

// TODO: Create a User entity that extends BaseEntity
// With: email, password, profile: { firstName, lastName, age? }


// TODO: Create a mapped type ToDTO<T> that:
// - Removes sensitive fields (password)
// - Makes all fields readonly
// - Converts dates to ISO strings
// - Makes all nested objects also transformed


// TODO: Create a mapped type ToCreateDTO<T> that:
// - Omits id and timestamps
// - Makes all fields required except optional ones


// TODO: Create a mapper function that converts Entity to DTO


// Test your implementation
// const user: User = {...};
// const userDTO: ToDTO<User> = mapToDTO(user);
// const createData: ToCreateDTO<User> = {...};