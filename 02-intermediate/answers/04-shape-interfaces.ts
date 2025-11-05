/**
 * EXERCISE 4: Shape Interfaces - SOLUTION
 */

// Solution: Shape interface
interface Shape {
  getArea(): number;
}

// Solution: Rectangle interface
interface Rectangle extends Shape {
  width: number;
  height: number;
}

// Solution: Circle interface
interface Circle extends Shape {
  radius: number;
}

// Solution: Triangle interface
interface Triangle extends Shape {
  base: number;
  height: number;
}

// Solution: Function to print area
function printArea(shape: Shape): void {
  console.log(`Area: ${shape.getArea()}`);
}

// Implement shapes
class MyRectangle implements Rectangle {
  constructor(public width: number, public height: number) {}
  
  getArea(): number {
    return this.width * this.height;
  }
}

class MyCircle implements Circle {
  constructor(public radius: number) {}
  
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class MyTriangle implements Triangle {
  constructor(public base: number, public height: number) {}
  
  getArea(): number {
    return (this.base * this.height) / 2;
  }
}

// Test
const shapes: Shape[] = [
  new MyRectangle(10, 5),
  new MyCircle(7),
  new MyTriangle(8, 6)
];

console.log("=== Shape Areas ===");
shapes.forEach((shape, index) => {
  console.log(`Shape ${index + 1}:`);
  printArea(shape);
});

// Bonus: Type guard
function isCircle(shape: Shape): shape is Circle {
  return 'radius' in shape;
}

shapes.forEach(shape => {
  if (isCircle(shape)) {
    console.log(`Circle with radius ${shape.radius}`);
  }
});