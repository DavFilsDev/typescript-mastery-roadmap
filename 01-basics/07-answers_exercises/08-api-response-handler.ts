/**
 * EXERCISE 8: API Response Handler - SOLUTION
 */

// Solution: ApiResponse union type
type ApiResponse = 
  | { status: "loading" }
  | { status: "success"; data: object }
  | { status: "error"; message: string };

// Solution: Handle response
function handleApiResponse(response: ApiResponse): string {
  switch (response.status) {
    case "loading":
      return "Loading...";
    case "success":
      return `Data loaded: ${JSON.stringify(response.data)}`;
    case "error":
      return `Error: ${response.message}`;
    default:
      return "Unknown response";
  }
}

// Test
const loading: ApiResponse = { status: "loading" };
const success: ApiResponse = { status: "success", data: { user: "Alice", id: 123 } };
const error: ApiResponse = { status: "error", message: "Network failed" };

console.log(handleApiResponse(loading));  // "Loading..."
console.log(handleApiResponse(success));  // "Data loaded: {"user":"Alice","id":123}"
console.log(handleApiResponse(error));    // "Error: Network failed"

// Bonus: Type guard functions
function isLoading(response: ApiResponse): response is { status: "loading" } {
  return response.status === "loading";
}

function isSuccess(response: ApiResponse): response is { status: "success"; data: object } {
  return response.status === "success";
}

// Bonus: Process with type guards
function processResponse(response: ApiResponse): void {
  if (isLoading(response)) {
    console.log("⏳ Please wait...");
  } else if (isSuccess(response)) {
    console.log(" Data received:", response.data);
  } else {
    console.log(" Failed:", response.message);
  }
}

processResponse(success);