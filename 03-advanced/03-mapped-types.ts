/**
 * MAPPED TYPES
 * Transforming existing types
 */

// Basic mapped type
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface User {
  id: number;
  name: string;
  email: string;
}

type ReadonlyUser = Readonly<User>;

// Partial mapped type
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type PartialUser = Partial<User>;

// Pick mapped type
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type UserPreview = Pick<User, "id" | "name">;

// Record mapped type
type Record<K extends keyof any, T> = {
  [P in K]: T;
};

const scores: Record<string, number> = {
  math: 95,
  science: 88,
  english: 92
};

// Real-world: HTTP Headers
type HttpHeaders = Record<string, string>;

const headers: HttpHeaders = {
  "Content-Type": "application/json",
  "Authorization": "Bearer token123"
};

// Mapped type with property modification
type NullableProperties<T> = {
  [P in keyof T]: T[P] | null;
};

type NullableUser = NullableProperties<User>;

// Mapped type with filtering
type RemoveMethods<T> = {
  [P in keyof T as T[P] extends Function ? never : P]: T[P];
};

interface ApiService {
  id: number;
  name: string;
  fetchData(): Promise<any>;
  saveData(data: any): void;
}

type ApiProperties = RemoveMethods<ApiService>; // { id: number; name: string }

// Mapped type for string manipulation
type Getters<T> = {
  [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P];
};

interface Person {
  name: string;
  age: number;
}

type PersonGetters = Getters<Person>;
// { getName: () => string; getAge: () => number }

// Practical: Form fields
type FormFields = {
  username: string;
  password: string;
  rememberMe: boolean;
};

type FormTouched = {
  [K in keyof FormFields]: boolean;
};

type FormErrors = {
  [K in keyof FormFields]?: string;
};

const touched: FormTouched = {
  username: true,
  password: false,
  rememberMe: true
};

const errors: FormErrors = {
  username: "Username is required"
};

// Mapped type with template literal
type EventMap<T> = {
  [K in keyof T as `on${Capitalize<string & K>}`]: (value: T[K]) => void;
};

interface UserData {
  name: string;
  age: number;
  email: string;
}

type UserEvents = EventMap<UserData>;
// { onName: (value: string) => void; onAge: (value: number) => void; onEmail: (value: string) => void; }