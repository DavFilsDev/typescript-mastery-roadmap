/**
 * EXERCISE 8: Payment System with Enums - SOLUTION
 */

// Solution: PaymentMethod enum
enum PaymentMethod {
  CreditCard = "CREDIT_CARD",
  DebitCard = "DEBIT_CARD",
  PayPal = "PAYPAL",
  BankTransfer = "BANK_TRANSFER",
  Crypto = "CRYPTO"
}

// Solution: PaymentStatus enum
enum PaymentStatus {
  Pending = "PENDING",
  Processing = "PROCESSING",
  Completed = "COMPLETED",
  Failed = "FAILED",
  Refunded = "REFUNDED"
}

// Solution: Currency enum
enum Currency {
  USD = "USD",
  EUR = "EUR",
  GBP = "GBP",
  JPY = "JPY",
  BTC = "BTC"
}

// Solution: Payment interface
interface Payment {
  id: number;
  amount: number;
  method: PaymentMethod;
  status: PaymentStatus;
  currency: Currency;
  createdAt: Date;
}

// Solution: PaymentProcessor class
class PaymentProcessor {
  private payments: Payment[] = [];
  private nextId = 1;

  // Simple conversion rates (to USD)
  private conversionRates: Record<Currency, number> = {
    [Currency.USD]: 1,
    [Currency.EUR]: 1.09,
    [Currency.GBP]: 1.27,
    [Currency.JPY]: 0.0067,
    [Currency.BTC]: 43000
  };

  createPayment(
    amount: number,
    method: PaymentMethod,
    currency: Currency = Currency.USD
  ): Payment {
    const payment: Payment = {
      id: this.nextId++,
      amount,
      method,
      status: PaymentStatus.Pending,
      currency,
      createdAt: new Date()
    };

    this.payments.push(payment);
    console.log(`Created payment #${payment.id}: ${amount} ${currency} via ${method}`);
    return payment;
  }

  processPayment(id: number): Payment | null {
    const payment = this.payments.find(p => p.id === id);
    
    if (!payment) {
      console.log(`Payment #${id} not found`);
      return null;
    }

    if (payment.status !== PaymentStatus.Pending) {
      console.log(`Payment #${id} cannot be processed (status: ${payment.status})`);
      return null;
    }

    // Simulate processing
    const success = Math.random() > 0.2; // 80% success rate
    
    payment.status = success ? PaymentStatus.Completed : PaymentStatus.Failed;
    console.log(`Payment #${id} ${success ? 'completed' : 'failed'}`);
    
    return payment;
  }

  refundPayment(id: number): Payment | null {
    const payment = this.payments.find(p => p.id === id);
    
    if (!payment) {
      console.log(`Payment #${id} not found`);
      return null;
    }

    if (payment.status !== PaymentStatus.Completed) {
      console.log(`Payment #${id} cannot be refunded (status: ${payment.status})`);
      return null;
    }

    payment.status = PaymentStatus.Refunded;
    console.log(`Payment #${id} refunded`);
    
    return payment;
  }

  getPaymentsByStatus(status: PaymentStatus): Payment[] {
    return this.payments.filter(p => p.status === status);
  }

  convertAmount(amount: number, from: Currency, to: Currency): number {
    const usdAmount = amount * this.conversionRates[from];
    return usdAmount / this.conversionRates[to];
  }

  getTotalByCurrency(currency: Currency): number {
    const completed = this.payments.filter(
      p => p.status === PaymentStatus.Completed && p.currency === currency
    );
    return completed.reduce((sum, p) => sum + p.amount, 0);
  }

  getSummary(): void {
    console.log("\n=== Payment Summary ===");
    
    Object.values(PaymentStatus).forEach(status => {
      const count = this.getPaymentsByStatus(status).length;
      if (count > 0) {
        console.log(`${status}: ${count} payments`);
      }
    });

    console.log("\nBy Currency:");
    Object.values(Currency).forEach(currency => {
      const total = this.getTotalByCurrency(currency);
      if (total > 0) {
        console.log(`${currency}: ${total.toFixed(2)}`);
      }
    });
  }
}

// Test
const processor = new PaymentProcessor();

// Create payments
const p1 = processor.createPayment(100, PaymentMethod.CreditCard, Currency.USD);
const p2 = processor.createPayment(50, PaymentMethod.PayPal, Currency.EUR);
const p3 = processor.createPayment(200, PaymentMethod.BankTransfer, Currency.GBP);
const p4 = processor.createPayment(0.001, PaymentMethod.Crypto, Currency.BTC);

// Process payments
processor.processPayment(1);
processor.processPayment(2);
processor.processPayment(3);
processor.processPayment(4);

// Refund one
processor.refundPayment(1);

// Get summary
processor.getSummary();

// Currency conversion
console.log("\n=== Currency Conversion ===");
const eurToUsd = processor.convertAmount(100, Currency.EUR, Currency.USD);
console.log(`100 EUR = ${eurToUsd.toFixed(2)} USD`);

const btcToEur = processor.convertAmount(0.5, Currency.BTC, Currency.EUR);
console.log(`0.5 BTC = ${btcToEur.toFixed(2)} EUR`);

// Bonus: Payment statistics
function getPaymentStats(payments: Payment[]) {
  const total = payments.length;
  const completed = payments.filter(p => p.status === PaymentStatus.Completed).length;
  const successRate = (completed / total) * 100;
  
  return {
    total,
    completed,
    successRate: successRate.toFixed(1) + '%',
    totalAmount: payments.reduce((sum, p) => sum + p.amount, 0)
  };
}

console.log("\nStatistics:", getPaymentStats(processor['payments']));