/**
 * EXERCISE 10: Calculator Function
 * 
 * Create a flexible calculator using unions and literals
 */

// TODO: Create a type for operation: "add" | "subtract" | "multiply" | "divide"


// TODO: Create a calculator function that:
// - Takes two numbers
// - Takes an operation
// - Returns the result
// - Handle division by zero (return "Cannot divide by zero")
function calculate(a: number, b: number, operation: any): number | string {
  // Your code here
  return 0;
}

// TODO: Create a function that processes multiple calculations
// Takes an array of [a, b, operation] and returns array of results
function calculateMultiple(calculations: [number, number, any][]): (number | string)[] {
  // Your code here
  return [];
}

// Test
console.log(calculate(10, 5, "add"));        // 15
console.log(calculate(10, 5, "subtract"));   // 5
console.log(calculate(10, 0, "divide"));     // "Cannot divide by zero"

const multiple = [
  [10, 5, "add"],
  [10, 5, "multiply"],
  [10, 0, "divide"]
] as [number, number, any][];

console.log(calculateMultiple(multiple));    // [15, 50, "Cannot divide by zero"]