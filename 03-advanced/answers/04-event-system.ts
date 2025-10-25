/**
 * EXERCISE 4: Type-Safe Event System - SOLUTION
 */

// Solution: Event categories and actions
type EventCategory = "user" | "product" | "order";
type EventAction = "created" | "updated" | "deleted" | "viewed";

// Solution: EventName template literal
type EventName = `${EventCategory}:${EventAction}`;

// Solution: EventMap type
interface EventMap {
  "user:created": { userId: number; timestamp: Date; email: string };
  "user:updated": { userId: number; changes: string[] };
  "user:deleted": { userId: number; reason?: string };
  "user:viewed": { userId: number; viewerId?: number };
  
  "product:created": { productId: number; name: string; price: number };
  "product:updated": { productId: number; changes: Partial<{ name: string; price: number }> };
  "product:deleted": { productId: number };
  "product:viewed": { productId: number; userId?: number };
  
  "order:created": { orderId: number; userId: number; total: number };
  "order:updated": { orderId: number; status: "pending" | "paid" | "shipped" };
  "order:deleted": { orderId: number };
  "order:viewed": { orderId: number; userId: number };
}

// Solution: EventEmitter class
class EventEmitter {
  private handlers: Map<EventName, Set<Function>> = new Map();

  on<E extends EventName>(event: E, handler: (payload: EventMap[E]) => void): void {
    if (!this.handlers.has(event)) {
      this.handlers.set(event, new Set());
    }
    this.handlers.get(event)!.add(handler);
  }

  emit<E extends EventName>(event: E, payload: EventMap[E]): void {
    const handlers = this.handlers.get(event);
    if (handlers) {
      handlers.forEach(handler => handler(payload));
    }
  }

  off<E extends EventName>(event: E, handler: (payload: EventMap[E]) => void): void {
    const handlers = this.handlers.get(event);
    if (handlers) {
      handlers.delete(handler);
    }
  }

  once<E extends EventName>(event: E, handler: (payload: EventMap[E]) => void): void {
    const onceHandler = (payload: EventMap[E]) => {
      handler(payload);
      this.off(event, onceHandler as any);
    };
    this.on(event, onceHandler as any);
  }
}

// Test
const emitter = new EventEmitter();

// Type-safe event handlers
emitter.on("user:created", (payload) => {
  console.log(`User ${payload.userId} created at ${payload.timestamp}`);
  console.log(`Email: ${payload.email}`); // TypeScript knows this exists
});

emitter.on("product:viewed", (payload) => {
  console.log(`Product ${payload.productId} viewed by user ${payload.userId}`);
});

emitter.on("order:updated", (payload) => {
  console.log(`Order ${payload.orderId} status: ${payload.status}`);
});

// Type-safe emissions
emitter.emit("user:created", {
  userId: 123,
  timestamp: new Date(),
  email: "alice@test.com"
});

emitter.emit("product:viewed", {
  productId: 456,
  userId: 123
});

emitter.emit("order:updated", {
  orderId: 789,
  status: "paid"
});

// Once handler
emitter.once("user:deleted", (payload) => {
  console.log(`User ${payload.userId} deleted. Reason: ${payload.reason}`);
});

emitter.emit("user:deleted", { userId: 123, reason: "inactive" });
emitter.emit("user:deleted", { userId: 456 }); // Won't trigger

// Bonus: Event statistics
class EventEmitterWithStats extends EventEmitter {
  private stats: Map<EventName, number> = new Map();

  emit<E extends EventName>(event: E, payload: EventMap[E]): void {
    super.emit(event, payload);
    this.stats.set(event, (this.stats.get(event) || 0) + 1);
  }

  getStats(): Record<EventName, number> {
    return Object.fromEntries(this.stats) as any;
  }
}

const statsEmitter = new EventEmitterWithStats();
statsEmitter.emit("user:created", { userId: 1, timestamp: new Date(), email: "a@b.com" });
statsEmitter.emit("user:created", { userId: 2, timestamp: new Date(), email: "c@d.com" });
statsEmitter.emit("product:viewed", { productId: 1 });
console.log("Stats:", statsEmitter.getStats());