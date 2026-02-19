/**
 * LESSON 1: Hello TypeScript! 👋
 * 
 * Welcome to your TypeScript journey!
 * Today we'll learn:
 * 1. What is TypeScript and why it's awesome
 * 2. How TypeScript adds types to JavaScript
 * 3. Type inference vs explicit annotations
 * 4. Compiling TypeScript to JavaScript
 */

// PART 1: Your First TypeScript Code

/**
 * This is a simple console.log - just like in JavaScript!
 * TypeScript is a superset of JavaScript, so all JavaScript code 
 * is valid TypeScript code.
 */
console.log("Hello, TypeScript! 🚀");

// PART 2: Type Inference - TypeScript Guesses the Type

/**
 * TypeScript is smart! It can infer (guess) the type of your variables.
 * Hover over 'message' in VS Code to see what TypeScript thinks.
 */
let message = "Hello, TypeScript!"; // TypeScript infers this is a string
console.log(typeof message); // Output: string

let count = 42; // TypeScript infers this is a number
let isLearning = true; // TypeScript infers this is a boolean

/**
 * EXERCISE 2.1: Uncomment the line below and see what happens
 * Can you guess why TypeScript shows an error?
 */
// message = 123; // Error: Type 'number' is not assignable to type 'string'

// ========================================
// PART 3: Explicit Type Annotations - You Tell TypeScript the Type
// ========================================

/**
 * Sometimes you want to be explicit about types.
 * This is especially useful for function parameters and complex objects.
 */
let explicitMessage: string = "I explicitly said this is a string";
let explicitCount: number = 100;
let explicitIsLearning: boolean = true;

/**
 * EXERCISE 3.1: Try to assign a string to explicitCount
 * Uncomment the line below and see TypeScript protect you!
 */
// explicitCount = "not a number"; // Error: Type 'string' is not assignable to type 'number'

// ========================================
// PART 4: Multiple Variable Declaration
// ========================================

/**
 * You can declare multiple variables at once
 */
let firstName = "John", lastName = "Doe", age = 30;
// But be careful - this can reduce readability!

// Better approach:
let city: string = "New York";
let population: number = 8419000;
let isCapital: boolean = false;

// ========================================
// PART 5: Constants with const
// ========================================

/**
 * const works just like in JavaScript, but TypeScript is smarter
 * about the type inference for constants
 */
const PI = 3.14159; // TypeScript infers this as 3.14159 (literal type, not just number)
const BIRTH_YEAR = 1990; // TypeScript infers this as 1990 (literal type)

/**
 * EXERCISE 5.1: Try to reassign a constant
 * Uncomment the line below and see what happens
 */
// PI = 3.14; // Error: Cannot assign to 'PI' because it is a constant

// ========================================
// PART 6: Any Type - The Escape Hatch (USE SPARINGLY!)
// ========================================

/**
 * 'any' disables type checking. Use it only when absolutely necessary,
 * like when migrating JavaScript to TypeScript gradually.
 */
let flexible: any = "I can be anything";
flexible = 42; // No error - 'any' accepts any type
flexible = true; // Still no error
flexible = { name: "Object" }; // Works too!

console.log("Flexible variable can be anything:", flexible);

/**
 * WARNING: 'any' defeats the purpose of TypeScript.
 * Prefer 'unknown' (we'll learn later) if you really don't know the type.
 */

// ========================================
// PART 7: Template Strings (Same as JavaScript)
// ========================================

let userName = "TypeScript Learner";
let learningDays = 1;

// Template literals work exactly like in JavaScript
let introduction = `Hi, I'm ${userName} and I've been learning TypeScript for ${learningDays} day(s)!`;
console.log(introduction);

// ========================================
// PART 8: Understanding TypeScript Errors
// ========================================

/**
 * TypeScript errors are your friends! They help you catch bugs early.
 * Let's look at some common error patterns:
 */

// ERROR PATTERN 1: Type mismatch
let myAge: number = 25;
// myAge = "twenty-five"; // Try uncommenting - see the helpful error message!

// ERROR PATTERN 2: Using a variable before declaration
// console.log(someVariable); // Error: Block-scoped variable used before declaration
// let someVariable = "test";

// ERROR PATTERN 3: Type 'any' implicitly
// This would error with noImplicitAny: true in tsconfig
// function processData(data) { // Parameter 'data' implicitly has an 'any' type
//     return data.length;
// }

// ========================================
// PART 9: Compilation - From TypeScript to JavaScript
// ========================================

/**
 * TypeScript code needs to be compiled to JavaScript to run.
 * Try these commands in your terminal:
 * 
 * 1. Compile once:    tsc 01-hello-world.ts
 * 2. Watch mode:      tsc 01-hello-world.ts --watch
 * 3. Run with ts-node: ts-node 01-hello-world.ts
 * 
 * Check the generated JavaScript file to see how TypeScript looks
 * after compilation - all the type annotations are gone!
 */

// ========================================
// PRACTICE EXERCISES
// ========================================

/**
 * EXERCISE 1: Variable Declaration
 * Create variables for your:
 * - name (string)
 * - age (number)
 * - isStudent (boolean)
 * - favoriteLanguages (array of strings)
 * Use both inferred and explicit typing
 */

// Write your solution here:
let yourName: string = "Your Name"; // Replace with your name
let yourAge: number = 25; // Replace with your age
let isStudent: boolean = true; // Are you a student?
let favoriteLanguages: string[] = ["TypeScript", "JavaScript"]; // Array of strings

console.log("\n--- My Info ---");
console.log(`Name: ${yourName}`);
console.log(`Age: ${yourAge}`);
console.log(`Student: ${isStudent ? "Yes" : "No"}`);
console.log(`Favorite Languages: ${favoriteLanguages.join(", ")}`);

/**
 * EXERCISE 2: Type Errors
 * Below are some variable declarations. 
 * Uncomment them and fix the type errors:
 */

// TODO: Fix this code - uncomment and correct
// let bookTitle: string = 42;
// let pages: number = "three hundred";
// let isPublished: boolean = "yes";

// Solution:
let bookTitle: string = "The TypeScript Guide";
let pages: number = 300;
let isPublished: boolean = true;

/**
 * EXERCISE 3: Type Inference Challenge
 * What types will TypeScript infer for these variables?
 * Write your answers as comments, then hover to check!
 */
let inferredString = "I'm a string"; // Type: _______
let inferredNumber = 3.14; // Type: _______
let inferredBoolean = false; // Type: _______
let inferredArray = [1, 2, 3]; // Type: _______
let inferredMixedArray = [1, "two", true]; // Type: _______

// Answers (check by hovering in VS Code):
// inferredString: string
// inferredNumber: number
// inferredBoolean: boolean
// inferredArray: number[]
// inferredMixedArray: (string | number | boolean)[]

// ========================================
// BONUS: typeof Operator
// ========================================

/**
 * You can use JavaScript's typeof operator at runtime,
 * and TypeScript's typeof at compile time!
 */

// Runtime typeof (JavaScript)
console.log("\n--- Runtime Types ---");
console.log(`type of yourName: ${typeof yourName}`);
console.log(`type of yourAge: ${typeof yourAge}`);
console.log(`type of isStudent: ${typeof isStudent}`);
console.log(`type of favoriteLanguages: ${typeof favoriteLanguages}`); // "object" - arrays are objects in JS!

// ========================================
// SUMMARY
// ========================================

/**
 * Today you learned:
 * ✅ TypeScript is JavaScript with types
 * ✅ Type inference - TypeScript guesses types
 * ✅ Type annotations - You explicitly set types
 * ✅ Basic types: string, number, boolean, array
 * ✅ const vs let for variable declaration
 * ✅ The 'any' type (and why to avoid it)
 * ✅ How to read TypeScript errors
 * ✅ TypeScript needs compilation to run
 * 
 * Next Lesson: Primitive Types in Depth! 
 * We'll explore string, number, and boolean with all their nuances.
 */