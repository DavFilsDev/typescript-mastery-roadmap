/**
 * EXERCISE 2: Bank System with Classes - SOLUTION
 */

// Solution: BankAccount class
class BankAccount {
  constructor(
    public readonly accountNumber: string,
    public owner: string,
    private balance: number
  ) {}

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
  }

  withdraw(amount: number): boolean {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
      return true;
    } else {
      console.log(`Insufficient funds. Current balance: $${this.balance}`);
      return false;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

// Solution: SavingsAccount class
class SavingsAccount extends BankAccount {
  constructor(
    accountNumber: string,
    owner: string,
    balance: number,
    private interestRate: number
  ) {
    super(accountNumber, owner, balance);
  }

  applyInterest(): void {
    const interest = this.getBalance() * this.interestRate;
    this.deposit(interest);
    console.log(`Applied interest: $${interest}`);
  }
}

// Solution: Bank class
class Bank {
  private accounts: BankAccount[] = [];

  addAccount(account: BankAccount): void {
    this.accounts.push(account);
    console.log(`Account ${account.accountNumber} added.`);
  }

  getAccount(accountNumber: string): BankAccount | undefined {
    return this.accounts.find(acc => acc.accountNumber === accountNumber);
  }

  getTotalBalance(): number {
    return this.accounts.reduce((total, acc) => total + acc.getBalance(), 0);
  }

  listAccounts(): void {
    console.log("\n=== Bank Accounts ===");
    this.accounts.forEach(acc => {
      console.log(`${acc.accountNumber}: ${acc.owner} - $${acc.getBalance()}`);
    });
  }
}

// Test
const account1 = new BankAccount("ACC001", "Alice", 1000);
account1.deposit(500); // $1500
account1.withdraw(200); // $1300
console.log("Balance:", account1.getBalance()); // 1300

const savings = new SavingsAccount("SAV001", "Bob", 2000, 0.05);
savings.applyInterest(); // Adds $100 (5% of 2000)
console.log("Savings balance:", savings.getBalance()); // 2100

const bank = new Bank();
bank.addAccount(account1);
bank.addAccount(savings);
bank.listAccounts();
console.log("Total bank balance:", bank.getTotalBalance()); // 3400