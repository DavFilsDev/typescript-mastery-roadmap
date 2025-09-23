/**
 * EXERCISE 5: Array Transformations - SOLUTION
 */

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const words: string[] = ["typescript", "is", "awesome", "and", "fun"];

// Solution: Get even numbers
function getEvenNumbers(arr: number[]): number[] {
  return arr.filter(num => num % 2 === 0);
}

// Solution: Double each number
function doubleNumbers(arr: number[]): number[] {
  return arr.map(num => num * 2);
}

// Solution: Get first three items (generic)
function getFirstThree<T>(arr: T[]): T[] {
  return arr.slice(0, 3);
}

// Solution: Capitalize all words
function capitalizeWords(arr: string[]): string[] {
  return arr.map(word => word.toUpperCase());
}

// Test
console.log("Even numbers:", getEvenNumbers(numbers));        // [2,4,6,8,10]
console.log("Doubled:", doubleNumbers([1, 2, 3]));            // [2,4,6]
console.log("First three words:", getFirstThree(words));      // ["typescript","is","awesome"]
console.log("Capitalized:", capitalizeWords(["hi", "bye"]));  // ["HI", "BYE"]

// Bonus: Chain methods
const result = numbers
  .filter(n => n > 5)
  .map(n => n * 2)
  .slice(0, 3);
console.log("Chained result:", result); // [12, 14, 16]