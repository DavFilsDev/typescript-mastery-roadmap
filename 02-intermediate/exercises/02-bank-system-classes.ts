/**
 * EXERCISE 2: Bank System with Classes
 * 
 * Create a simple banking system using classes
 */

// TODO: Create a BankAccount class with:
// - Properties: accountNumber (readonly), owner (string), balance (private)
// - Methods: deposit(amount), withdraw(amount), getBalance()
// - Add validation: cannot withdraw more than balance


// TODO: Create a SavingsAccount class that extends BankAccount
// - Add interestRate property
// - Add applyInterest() method that adds interest to balance


// TODO: Create a Bank class that manages multiple accounts:
// - accounts: BankAccount[] (private)
// - addAccount(account): void
// - getAccount(accountNumber): BankAccount | undefined
// - getTotalBalance(): number


// Test your classes
// const account1 = new BankAccount("ACC001", "Alice", 1000);
// account1.deposit(500);
// account1.withdraw(200);
// console.log(account1.getBalance()); // Should be 1300

// const savings = new SavingsAccount("SAV001", "Bob", 2000, 0.05);
// savings.applyInterest();
// console.log(savings.getBalance()); // Should be 2100