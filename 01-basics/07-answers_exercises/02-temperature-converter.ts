/**
 * EXERCISE 2: Temperature Converter - SOLUTION
 */

// Solution: Celsius to Fahrenheit
function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9/5) + 32;
}

// Solution: Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit: number): number {
  return (fahrenheit - 32) * 5/9;
}

// Test the functions
console.log("0°C to Fahrenheit:", celsiusToFahrenheit(0));    // 32
console.log("100°C to Fahrenheit:", celsiusToFahrenheit(100)); // 212
console.log("32°F to Celsius:", fahrenheitToCelsius(32));     // 0
console.log("212°F to Celsius:", fahrenheitToCelsius(212));   // 100

// Bonus: Round to 1 decimal place
function preciseConverter(value: number, unit: "CtoF" | "FtoC"): number {
  if (unit === "CtoF") {
    return Math.round((value * 9/5 + 32) * 10) / 10;
  } else {
    return Math.round((value - 32) * 5/9 * 10) / 10;
  }
}

console.log("37°C to Fahrenheit (precise):", preciseConverter(37, "CtoF")); // 98.6