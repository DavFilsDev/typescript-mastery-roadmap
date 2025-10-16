/**
 * TEMPLATE LITERAL TYPES
 * String manipulation at type level
 */

// Basic template literal types
type Horizontal = "left" | "center" | "right";
type Vertical = "top" | "center" | "bottom";

type Position = `${Horizontal}-${Vertical}`;

const pos1: Position = "left-top";
const pos2: Position = "center-center";
// const pos3: Position = "left-middle"; // Error

// String manipulation utilities
type Greeting = `Hello, ${string}!`;

const greet1: Greeting = "Hello, World!"; // Valid
const greet2: Greeting = "Hello, Alice!"; // Valid
// const greet3: Greeting = "Hi there!"; // Error

// Union combinations
type Size = "small" | "medium" | "large";
type Color = "red" | "green" | "blue";

type SizeColor = `${Size}-${Color}`;

const item1: SizeColor = "small-red";
const item2: SizeColor = "large-blue";

// CSS class names
type Spacing = "sm" | "md" | "lg";
type Direction = "t" | "b" | "l" | "r";

type MarginClass = `m${Direction}-${Spacing}`;
type PaddingClass = `p${Direction}-${Spacing}`;

const margin: MarginClass = "mt-sm";
const padding: PaddingClass = "pb-lg";

// Event handlers
type EventType = "click" | "change" | "submit" | "focus";
type Element = "button" | "input" | "form";

type EventHandler = `on${Capitalize<EventType>}${Capitalize<Element>}`;

const handler1: EventHandler = "onClickButton";
const handler2: EventHandler = "onChangeInput";
const handler3: EventHandler = "onSubmitForm";

// API endpoints
type Resource = "users" | "products" | "orders";
type Action = "get" | "create" | "update" | "delete";

type ApiEndpoint = `/${Resource}/${Action}`;

const endpoint1: ApiEndpoint = "/users/get";
const endpoint2: ApiEndpoint = "/products/create";
// const endpoint3: ApiEndpoint = "/users/deleteAll"; // Error

// Nested template literals
type Route = `/${string}`;
type ApiVersion = "v1" | "v2";
type ApiRoute = `/api/${ApiVersion}${Route}`;

const apiRoute1: ApiRoute = "/api/v1/users";
const apiRoute2: ApiRoute = "/api/v2/products/123";

// Practical: CSS variables
type CSSVariable = `--${string}`;

const primaryColor: CSSVariable = "--primary-color";
const spacingUnit: CSSVariable = "--spacing-unit";

// Extract string parts
type ExtractId<T extends string> = T extends `user-${infer Id}` ? Id : never;

type UserId = ExtractId<"user-12345">; // "12345"

// Complex real-world: State machine events
type State = "idle" | "loading" | "success" | "error";
type Transition = `from-${State}-to-${State}`;

const validTransition: Transition = "from-idle-to-loading";
// const invalidTransition: Transition = "from-idle-to-idle"; // Could be valid depending on rules

// Database column names
type Table = "users" | "posts" | "comments";
type Column = "id" | "name" | "createdAt";

type QualifiedColumn = `${Table}.${Column}`;

const col1: QualifiedColumn = "users.id";
const col2: QualifiedColumn = "posts.createdAt";

// Local storage keys
type AppPrefix = "app" | "admin";
type Feature = "settings" | "profile" | "dashboard";

type StorageKey = `${AppPrefix}:${Feature}:${string}`;

const key1: StorageKey = "app:settings:theme";
const key2: StorageKey = "admin:profile:avatar";