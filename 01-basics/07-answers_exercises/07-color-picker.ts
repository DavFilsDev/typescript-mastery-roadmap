/**
 * EXERCISE 7: Color Picker - SOLUTION
 */

// Solution: Color literal type
type Color = "red" | "green" | "blue" | "yellow" | "purple";

// Solution: Get hex code
function getColorHex(color: Color): string {
  switch (color) {
    case "red":
      return "#FF0000";
    case "green":
      return "#00FF00";
    case "blue":
      return "#0000FF";
    case "yellow":
      return "#FFFF00";
    case "purple":
      return "#800080";
    default:
      return "#000000";
  }
}

// Solution: Check if warm color
function isWarmColor(color: Color): boolean {
  return color === "red" || color === "yellow";
}

// Test
console.log("Red hex:", getColorHex("red"));        // "#FF0000"
console.log("Green hex:", getColorHex("green"));    // "#00FF00"
console.log("Is red warm?", isWarmColor("red"));    // true
console.log("Is blue warm?", isWarmColor("blue"));  // false

// Bonus: Get color temperature
function getColorTemperature(color: Color): "warm" | "cool" {
  return isWarmColor(color) ? "warm" : "cool";
}

console.log("Red temperature:", getColorTemperature("red"));     // "warm"
console.log("Blue temperature:", getColorTemperature("blue"));   // "cool"

// Bonus: Array of all colors
const allColors: Color[] = ["red", "green", "blue", "yellow", "purple"];
console.log("All colors with hex:");
allColors.forEach(color => {
  console.log(`  ${color}: ${getColorHex(color)} (${getColorTemperature(color)})`);
});