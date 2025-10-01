/**
 * GENERICS INTRODUCTION
 * Reusable code with type parameters
 */

// Generic function - works with any type
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(42); // number
const str = identity<string>("hello"); // string
// Type inference works too
const bool = identity(true); // boolean

// Generic array function
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNum = getFirstElement([1, 2, 3]); // number
const firstStr = getFirstElement(["a", "b", "c"]); // string

// Generic interface
interface Box<T> {
  value: T;
  getValue(): T;
}

const stringBox: Box<string> = {
  value: "hello",
  getValue() {
    return this.value;
  }
};

const numberBox: Box<number> = {
  value: 123,
  getValue() {
    return this.value;
  }
};

// Generic class
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  getItems(): T[] {
    return this.items;
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.getItems()); // [1, 2]

const stringStack = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");
console.log(stringStack.pop()); // "world"

// Multiple type parameters
function pair<T, U>(first: T, second: U): { first: T; second: U } {
  return { first, second };
}

const result = pair<string, number>("age", 25);
console.log(result); // { first: "age", second: 25 }