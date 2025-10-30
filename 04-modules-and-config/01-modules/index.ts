/**
 * MAIN MODULE ENTRY POINT
 * Demonstrating different import styles
 */

// Import default export
import Calculator from './calculator.js';

// Import named exports
import { add, subtract, PI } from './math.js';

// Import with alias
import { multiply as times } from './math.js';

// Import all as namespace
import * as MathUtils from './math.js';

// Example usage
console.log("=== Module Examples ===");

// Using named imports directly
console.log("Add 5 + 3 =", add(5, 3));
console.log("Subtract 10 - 4 =", subtract(10, 4));
console.log("PI value:", PI);
console.log("Multiply 6 * 7 =", times(6, 7));

// Using namespace import
console.log("Divide 15 / 3 =", MathUtils.divide(15, 3));
console.log("E constant:", MathUtils.E);

// Using Calculator class (default import)
const calc = new Calculator();
calc.add(10).multiply(2).subtract(5).divide(3);
console.log("Calculator result:", calc.getResult());
console.log("Circle area (r=5):", calc.circleArea(5));

// Dynamic import example
async function loadMathModule() {
  const math = await import('./math.js');
  console.log("Dynamically loaded - 2^3 =", math.multiply(2, math.multiply(2, 2)));
}

loadMathModule();

// Re-export example
export { Calculator, MathUtils };
export * from './math.js';