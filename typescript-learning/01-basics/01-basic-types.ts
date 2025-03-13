/**
 * Basic TypeScript Types
 * This file demonstrates the fundamental types in TypeScript
 */

// 1. Primitive Types
let name: string = "Venky";
let age: number = 30;
let isStudent: boolean = true;

// 2. Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Venky", "Jane", "Bob"];
let mixed: (string | number)[] = ["Hello", 42, "World"];

// 3. Tuples - Fixed length arrays with specific types
let person: [string, number] = ["Venky", 30];
let coordinates: [number, number] = [10, 20];

// 4. Enums - Named constants
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

let currentDirection: Direction = Direction.Up;

// 5. Any - Avoid using this unless absolutely necessary
let notSure: any = 4;
notSure = "maybe a string";
notSure = false;

// 6. Unknown - Type-safe alternative to any
let uncertain: unknown = "Hello";
// Need type checking before using
if (typeof uncertain === "string") {
  console.log(uncertain.toUpperCase());
}

// 7. Void - Used when a function doesn't return anything
function logMessage(): void {
  console.log("This is a message");
}

// 8. Never - Used for functions that never return
function throwError(): never {
  throw new Error("An error occurred");
}

// 9. Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// 10. Type Inference
let inferredString = "TypeScript infers this as string";
let inferredNumber = 42; // TypeScript infers this as number

// 11. Type Assertions
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

// 12. Object Types
interface User {
  name: string;
  age: number;
  email?: string; // Optional property
}

const user: User = {
  name: "Venky",
  age: 30,
  email: "Venky@example.com",
};

// 13. Union Types
type StringOrNumber = string | number;
let value: StringOrNumber = "Hello";
value = 42; // This is also valid

// 14. Intersection Types
interface Employee {
  id: number;
  name: string;
}

interface Manager {
  department: string;
}

type ManagerEmployee = Employee & Manager;

const manager: ManagerEmployee = {
  id: 1,
  name: "Venky",
  department: "IT",
};

// 15. Literal Types
type CardinalDirection = "North" | "South" | "East" | "West";
let direction: CardinalDirection = "North";

// Example usage of these types
function processUser(user: User): void {
  console.log(`Processing user: ${user.name}`);
  if (user.email) {
    console.log(`Email: ${user.email}`);
  }
}

// Example with type guards
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processValue(value: unknown): void {
  if (isString(value)) {
    console.log(value.toUpperCase());
  } else {
    console.log("Not a string");
  }
}

// Export for use in other files
export { User, Direction, CardinalDirection, processUser, processValue };
