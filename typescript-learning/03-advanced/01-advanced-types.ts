/**
 * Advanced TypeScript Concepts
 * This file demonstrates advanced TypeScript features and patterns
 */

// 1. Generics
function identity<T>(arg: T): T {
  return arg;
}

// Generic Interface
interface GenericResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Generic Class
class GenericContainer<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }

  setValue(value: T): void {
    this.value = value;
  }
}

// 2. Utility Types
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial - Makes all properties optional
type PartialUser = Partial<User>;

// Pick - Select specific properties
type UserCredentials = Pick<User, "email" | "name">;

// Omit - Exclude specific properties
type UserWithoutEmail = Omit<User, "email">;

// Record - Create an object type with specific key and value types
type UserMap = Record<string, User>;

// Required - Makes all properties required
type RequiredUser = Required<PartialUser>;

// Readonly - Makes all properties read-only
type ReadonlyUser = Readonly<User>;

// 3. Type Guards
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

interface Car {
  type: "car";
  brand: string;
  model: string;
}

interface Bike {
  type: "bike";
  brand: string;
  isElectric: boolean;
}

type Vehicle = Car | Bike;

function isCar(vehicle: Vehicle): vehicle is Car {
  return vehicle.type === "car";
}

// 4. Mapped Types
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Optional<T> = {
  [P in keyof T]?: T[P];
};

// 5. Conditional Types
type NonNullable<T> = T extends null | undefined ? never : T;

type ExtractType<T, U> = T extends U ? T : never;

type ExcludeType<T, U> = T extends U ? never : T;

// 6. Index Types
interface StringMap {
  [key: string]: string;
}

interface NumberMap {
  [key: number]: string;
}

// 7. Template Literal Types
type Greeting = `Hello ${string}`;
type Direction = "top" | "bottom" | "left" | "right";
type Position = `${Direction}-${Direction}`;

// 8. Advanced Function Types
type FunctionType<T> = (arg: T) => T;
type AsyncFunctionType<T> = (arg: T) => Promise<T>;

// 9. Type Assertions with Generics
function castToType<T>(value: unknown): T {
  return value as T;
}

// 10. Generic Constraints
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// Example Usage
const user: User = {
  id: 1,
  name: "John",
  email: "john@example.com",
  age: 30,
};

// Using utility types
const partialUser: PartialUser = {
  name: "John",
};

const userCredentials: UserCredentials = {
  name: "John",
  email: "john@example.com",
};

const userWithoutEmail: UserWithoutEmail = {
  id: 1,
  name: "John",
  age: 30,
};

// Using type guards
function processValue(value: unknown): void {
  if (isString(value)) {
    console.log(value.toUpperCase());
  } else if (isNumber(value)) {
    console.log(value.toFixed(2));
  }
}

// Using conditional types
type ValidUser = NonNullable<User>;
type StringOrNumber = ExtractType<string | number | boolean, string | number>;

// Using mapped types
const readonlyUser: Readonly<User> = {
  id: 1,
  name: "John",
  email: "john@example.com",
  age: 30,
};

// Using template literal types
const position: Position = "top-left";
const greeting: Greeting = "Hello World";

// Export types and functions
export {
  User,
  GenericResponse,
  GenericContainer,
  PartialUser,
  UserCredentials,
  UserWithoutEmail,
  ReadonlyUser,
  isString,
  isNumber,
  isCar,
  processValue,
  castToType,
  loggingIdentity,
};
