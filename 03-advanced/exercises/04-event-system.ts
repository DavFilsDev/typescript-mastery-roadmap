/**
 * EXERCISE 4: Type-Safe Event System
 * 
 * Create an event system using template literals and mapped types
 */

// TODO: Define event categories and actions
type EventCategory = "user" | "product" | "order";
type EventAction = "created" | "updated" | "deleted" | "viewed";

// TODO: Create a template literal type EventName
// Format: `${category}:${action}`


// TODO: Create a EventMap type where:
// - Keys are EventName
// - Values are payload objects based on category and action
// Examples:
//   "user:created" -> { userId: number, timestamp: Date }
//   "product:viewed" -> { productId: number, userId?: number }
//   "order:updated" -> { orderId: number, status: string }


// TODO: Create an EventEmitter class that:
// - Has an on(event: E, handler: (payload: EventMap[E]) => void): void
// - Has an emit(event: E, payload: EventMap[E]): void
// - Is fully type-safe (event name matches payload type)


// Test your implementation
// const emitter = new EventEmitter();
// emitter.on("user:created", (payload) => {
//   console.log(payload.userId); // TypeScript knows this exists
// });
// emitter.emit("user:created", { userId: 123, timestamp: new Date() });