/**
 * DECORATORS
 * Class, method, property, and parameter decorators
 * 
 * NOTE: To use decorators, enable in tsconfig.json:
 * "experimentalDecorators": true,
 * "emitDecoratorMetadata": true
 */

// Class decorator
function Logger(constructor: Function) {
  console.log(`Class created: ${constructor.name}`);
}

@Logger
class Person {
  constructor(public name: string) {}
}

// Class decorator factory
function WithTimestamp(prefix: string) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      timestamp = new Date();
      logPrefix = prefix;
    };
  };
}

@WithTimestamp("APP")
class Message {
  constructor(public text: string) {}
}

const msg = new Message("Hello");
console.log(msg);
// { text: "Hello", timestamp: 2024-01-01..., logPrefix: "APP" }

// Method decorator
function LogMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  
  descriptor.value = function(...args: any[]) {
    console.log(`Calling ${propertyKey} with:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Result:`, result);
    return result;
  };
  
  return descriptor;
}

class Calculator {
  @LogMethod
  add(a: number, b: number): number {
    return a + b;
  }
  
  @LogMethod
  multiply(a: number, b: number): number {
    return a * b;
  }
}

const calc = new Calculator();
calc.add(5, 3); // Logs: Calling add with: [5, 3] then Result: 8
calc.multiply(4, 2); // Logs: Calling multiply with: [4, 2] then Result: 8

// Property decorator
function DefaultValue(value: any) {
  return function(target: any, propertyKey: string) {
    target[propertyKey] = value;
  };
}

class Settings {
  @DefaultValue("dark")
  theme: string;
  
  @DefaultValue(25)
  itemsPerPage: number;
}

const settings = new Settings();
console.log(settings.theme); // "dark"
console.log(settings.itemsPerPage); // 25

// Accessor decorator
function ReadOnly(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  descriptor.writable = false;
  return descriptor;
}

class User {
  private _name: string;
  
  constructor(name: string) {
    this._name = name;
  }
  
  @ReadOnly
  get name(): string {
    return this._name;
  }
}

const user = new User("Alice");
console.log(user.name); // "Alice"
// user.name = "Bob"; // Error (in strict mode)

// Parameter decorator
function Validate(target: any, propertyKey: string, parameterIndex: number) {
  const existingValidatedParameters: number[] = Reflect.getOwnMetadata("validate", target, propertyKey) || [];
  existingValidatedParameters.push(parameterIndex);
  Reflect.defineMetadata("validate", existingValidatedParameters, target, propertyKey);
}

// Practical: API decorator
function Get(path: string) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.value.path = path;
    descriptor.value.method = "GET";
  };
}

function Post(path: string) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.value.path = path;
    descriptor.value.method = "POST";
  };
}

class UserController {
  @Get("/users")
  getUsers() {
    return ["Alice", "Bob"];
  }
  
  @Post("/users")
  createUser() {
    return { success: true };
  }
}

const controller = new UserController();
const getUsersMethod = controller.getUsers;
console.log(getUsersMethod.path); // "/users"
console.log(getUsersMethod.method); // "GET"

// Multiple decorators (executed bottom-up)
function First() {
  console.log("First factory");
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("First decorator");
  };
}

function Second() {
  console.log("Second factory");
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Second decorator");
  };
}

class Demo {
  @First()
  @Second()
  test() {}
}
// Output order:
// "First factory"
// "Second factory"
// "Second decorator"
// "First decorator"

// Real-world: Validation decorator
function MinLength(length: number) {
  return function(target: any, propertyKey: string) {
    let value: string;
    
    const getter = function() {
      return value;
    };
    
    const setter = function(newVal: string) {
      if (newVal.length < length) {
        throw new Error(`${propertyKey} must be at least ${length} characters`);
      }
      value = newVal;
    };
    
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  };
}

class Form {
  @MinLength(3)
  username: string;
  
  @MinLength(8)
  password: string;
}

const form = new Form();
form.username = "jo"; // Error: username must be at least 3 characters
// form.username = "john"; // Works