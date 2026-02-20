/**
 * EXERCISE 5: Array Transformations
 * 
 * Practice with array methods and type safety
 */

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const words: string[] = ["typescript", "is", "awesome", "and", "fun"];

// TODO: Create a function that returns only even numbers
function getEvenNumbers(arr: number[]): number[] {
  // Your code here
  return [];
}

// TODO: Create a function that doubles each number
function doubleNumbers(arr: number[]): number[] {
  // Your code here
  return [];
}

// TODO: Create a function that returns the first 3 items
function getFirstThree<T>(arr: T[]): T[] {
  // Your code here
  return [];
}

// TODO: Create a function that capitalizes all words
// "hello" -> "HELLO"
function capitalizeWords(arr: string[]): string[] {
  // Your code here
  return [];
}

// Test your functions
console.log(getEvenNumbers(numbers));     // [2,4,6,8,10]
console.log(doubleNumbers([1,2,3]));      // [2,4,6]
console.log(getFirstThree(words));        // ["typescript","is","awesome"]
console.log(capitalizeWords(["hi", "bye"])); // ["HI", "BYE"]