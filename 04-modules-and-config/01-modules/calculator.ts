/**
 * CALCULATOR MODULE
 * Default export example
 */

import { add, subtract, multiply, divide, PI } from './math.js';

class Calculator {
  private result: number = 0;

  add(value: number): this {
    this.result = add(this.result, value);
    return this;
  }

  subtract(value: number): this {
    this.result = subtract(this.result, value);
    return this;
  }

  multiply(value: number): this {
    this.result = multiply(this.result, value);
    return this;
  }

  divide(value: number): this {
    this.result = divide(this.result, value);
    return this;
  }

  getResult(): number {
    return this.result;
  }

  reset(): this {
    this.result = 0;
    return this;
  }

  // Circle area using PI from math module
  circleArea(radius: number): number {
    return multiply(PI, multiply(radius, radius));
  }
}

// Default export
export default Calculator;