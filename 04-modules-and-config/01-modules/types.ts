/**
 * TYPE EXPORTS
 * Exporting types and interfaces
 */

// Export interface
export interface User {
  id: number;
  name: string;
  email: string;
}

// Export type
export type UserRole = "admin" | "editor" | "viewer";

// Export enum
export enum Permission {
  READ = "read",
  WRITE = "write",
  DELETE = "delete",
  ADMIN = "admin"
}

// Export class with types
export class UserManager {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getUser(id: number): User | undefined {
    return this.users.find(u => u.id === id);
  }

  getAllUsers(): User[] {
    return [...this.users];
  }
}

// Export type with utility
export type UserSummary = Pick<User, "id" | "name">;

// Export function with imported types
export function createUser(name: string, email: string): User {
  return {
    id: Math.floor(Math.random() * 1000),
    name,
    email
  };
}