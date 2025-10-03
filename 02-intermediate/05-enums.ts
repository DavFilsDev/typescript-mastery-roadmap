/**
 * ENUMS (Enumerations)
 * Named constants for better code readability
 */

// Numeric enum (default)
enum Direction {
  Up,     // 0
  Down,   // 1
  Left,   // 2
  Right   // 3
}

let move: Direction = Direction.Up;
console.log(move); // 0
console.log(Direction[move]); // "Up" - reverse mapping

// String enum
enum Status {
  Success = "SUCCESS",
  Error = "ERROR",
  Loading = "LOADING",
  Idle = "IDLE"
}

function handleStatus(status: Status): string {
  switch (status) {
    case Status.Success:
      return " Operation successful";
    case Status.Error:
      return " Something went wrong";
    case Status.Loading:
      return "⏳ Loading...";
    case Status.Idle:
      return "⏸ Ready";
  }
}

console.log(handleStatus(Status.Success)); // "✅ Operation successful"

// Heterogeneous enum (mixed types - not recommended)
enum Mixed {
  Yes = "YES",
  No = 0
}

// Const enum (more performant, no runtime code)
const enum Colors {
  Red = "#FF0000",
  Green = "#00FF00",
  Blue = "#0000FF"
}

let redColor = Colors.Red; // Compiles to direct value "#FF0000"

// Practical example: HTTP status codes
enum HttpStatus {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  InternalServerError = 500
}

function handleResponse(status: HttpStatus): string {
  if (status === HttpStatus.OK) {
    return "Request successful";
  } else if (status === HttpStatus.NotFound) {
    return "Resource not found";
  } else {
    return "Error occurred";
  }
}

console.log(handleResponse(HttpStatus.OK)); // "Request successful"

// Practical example: User roles
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER"
}

interface User {
  id: number;
  name: string;
  role: UserRole;
}

function canDelete(user: User): boolean {
  return user.role === UserRole.Admin;
}

const user1: User = {
  id: 1,
  name: "Alice",
  role: UserRole.Admin
};

console.log(canDelete(user1)); // true