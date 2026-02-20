/**
 * UNION & LITERAL TYPES
 * Combining types and exact value restrictions
 */

// UNION TYPES - variable can be multiple types
let userId: string | number;
userId = "abc123"; // Valid
userId = 12345;    // Also valid
// userId = true;  // Error: boolean not allowed

// Practical: API response can be success data or error
type ApiResponse = { data: object } | { error: string };

function handleResponse(response: ApiResponse) {
  if ("data" in response) {
    console.log("Success:", response.data);
  } else {
    console.log("Error:", response.error);
  }
}

// Union with multiple types
let status: "loading" | "success" | "error";
status = "loading";  // Valid
status = "success";  // Valid
status = "error";    // Valid
// status = "pending"; // Error: not allowed

// LITERAL TYPES - exact values only
let direction: "left" | "right" | "top" | "bottom";
direction = "left";  // Valid
// direction = "center"; // Error: not allowed

// Real-world: HTTP methods
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

function makeRequest(url: string, method: HttpMethod) {
  console.log(`Making ${method} request to ${url}`);
}

makeRequest("/api/users", "GET");  // Valid
// makeRequest("/api/users", "PATCH"); // Error: not allowed

// Real-world: User roles
type UserRole = "admin" | "editor" | "viewer";

let currentUserRole: UserRole = "admin";

// Nullable types
let maybeString: string | null = null;
maybeString = "now it's a string";

// Optional chaining (TypeScript 3.7+)
let user: { name?: string } = {};
console.log(user.name?.toUpperCase()); // No error, returns undefined

// Practical example: Form state
type FormState = 
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; data: object }
  | { status: "error"; message: string };

let form: FormState = { status: "idle" };
form = { status: "submitting" };
form = { status: "success", data: { id: 1 } };