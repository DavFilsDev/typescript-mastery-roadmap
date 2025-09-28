/**
 * EXERCISE 10: Calculator Function - SOLUTION
 */

// Solution: Operation type
type Operation = "add" | "subtract" | "multiply" | "divide";

// Solution: Calculator function
function calculate(a: number, b: number, operation: Operation): number | string {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      if (b === 0) {
        return "Cannot divide by zero";
      }
      return a / b;
    default:
      return "Invalid operation";
  }
}

// Solution: Process multiple calculations
function calculateMultiple(calculations: [number, number, Operation][]): (number | string)[] {
  return calculations.map(([a, b, op]) => calculate(a, b, op));
}

// Test
console.log("10 + 5 =", calculate(10, 5, "add"));           // 15
console.log("10 - 5 =", calculate(10, 5, "subtract"));      // 5
console.log("10 × 5 =", calculate(10, 5, "multiply"));      // 50
console.log("10 ÷ 5 =", calculate(10, 5, "divide"));        // 2
console.log("10 ÷ 0 =", calculate(10, 0, "divide"));        // "Cannot divide by zero"

const multiple: [number, number, Operation][] = [
  [10, 5, "add"],
  [10, 5, "multiply"],
  [10, 0, "divide"]
];

console.log("Multiple calculations:", calculateMultiple(multiple)); // [15, 50, "Cannot divide by zero"]

// Bonus: Advanced calculator with operation history
type Calculation = {
  a: number;
  b: number;
  operation: Operation;
  result: number | string;
  timestamp: Date;
};

class Calculator {
  private history: Calculation[] = [];

  calculate(a: number, b: number, operation: Operation): number | string {
    const result = calculate(a, b, operation);
    
    this.history.push({
      a,
      b,
      operation,
      result,
      timestamp: new Date()
    });
    
    return result;
  }

  getHistory(): Calculation[] {
    return this.history;
  }

  clearHistory(): void {
    this.history = [];
  }
}

const calc = new Calculator();
console.log("Class-based:", calc.calculate(15, 3, "divide"));
console.log("History:", calc.getHistory());