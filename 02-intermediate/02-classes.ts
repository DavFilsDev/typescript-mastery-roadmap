/**
 * CLASSES
 * Object-oriented programming in TypeScript
 */

// Basic class
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, I'm ${this.name}`;
  }
}

const alice = new Person("Alice", 25);
console.log(alice.greet());

// Access modifiers: public, private, protected
class BankAccount {
  public owner: string;
  private balance: number;
  protected accountNumber: string;

  constructor(owner: string, initialBalance: number) {
    this.owner = owner;
    this.balance = initialBalance;
    this.accountNumber = Math.random().toString(36).substring(7);
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }

  public getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount("John", 1000);
console.log(account.owner); // Public - accessible
// console.log(account.balance); // Error: private
// console.log(account.accountNumber); // Error: protected
console.log(account.getBalance()); // 1000

// Inheritance
class Animal {
  constructor(public name: string) {}

  makeSound(): string {
    return "Some sound";
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound(): string {
    return "Meow!";
  }
}

const cat = new Cat("Whiskers");
console.log(cat.makeSound()); // "Meow!"

// Parameter properties shorthand
class Product {
  constructor(
    public id: number,
    public name: string,
    private price: number
  ) {}

  getPrice(): number {
    return this.price;
  }
}