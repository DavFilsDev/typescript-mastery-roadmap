/**
 * EXERCISE 7: Color Picker
 * 
 * Practice with literal types
 */

// TODO: Create a literal type for basic colors
// "red" | "green" | "blue" | "yellow" | "purple"


// TODO: Create a function that takes a color and returns its hex code
// red -> "#FF0000"
// green -> "#00FF00"
// blue -> "#0000FF"
// yellow -> "#FFFF00"
// purple -> "#800080"
function getColorHex(color: any): string {
  // Your code here
  return "";
}

// TODO: Create a function that takes a color and returns if it's a warm color
// Warm colors: red, yellow
// Cool colors: green, blue, purple
function isWarmColor(color: any): boolean {
  // Your code here
  return false;
}

// Test
console.log(getColorHex("red"));     // "#FF0000"
console.log(getColorHex("green"));   // "#00FF00"
console.log(isWarmColor("red"));     // true
console.log(isWarmColor("blue"));    // false