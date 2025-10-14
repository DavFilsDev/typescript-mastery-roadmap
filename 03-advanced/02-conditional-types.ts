/**
 * CONDITIONAL TYPES
 * Types that depend on conditions
 */

// Basic conditional type
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

// Conditional type with infer
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function greet(name: string): string {
  return `Hello ${name}`;
}

type GreetReturn = ReturnType<typeof greet>; // string

// Extract element type from array
type ElementType<T> = T extends (infer U)[] ? U : never;

type StringArray = ElementType<string[]>; // string
type NumberArray = ElementType<number[]>; // number

// Real-world: API response types
type ApiSuccess<T> = { status: "success"; data: T };
type ApiError = { status: "error"; message: string };
type ApiLoading = { status: "loading" };

type ApiResponse<T> = ApiSuccess<T> | ApiError | ApiLoading;

type ExtractDataType<T> = T extends ApiSuccess<infer U> ? U : never;

type UserData = ExtractDataType<ApiSuccess<{ id: number; name: string }>>; // { id: number; name: string }

// Nested conditionals
type IsArray<T> = T extends any[] ? true : false;
type IsObject<T> = T extends object ? (T extends any[] ? false : true) : false;

type Test1 = IsArray<number[]>; // true
type Test2 = IsObject<{ name: string }>; // true
type Test3 = IsObject<string>; // false

// Practical: DeepReadonly
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

interface User {
  name: string;
  address: {
    city: string;
    zip: number;
  };
}

type ReadonlyUser = DeepReadonly<User>;

// Practical: Nullable properties
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

type NullableUser = Nullable<User>;

// Conditional type for function parameters
type FirstParameter<T extends (...args: any) => any> = 
  T extends (first: infer F, ...rest: any[]) => any ? F : never;

function logUser(id: number, name: string): void {}
type Param = FirstParameter<typeof logUser>; // number