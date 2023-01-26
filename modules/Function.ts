// Functions
function sayMyName(name: string): string {
  return `Hello, ${name}`;
}
function throwError(error: string): never {
  throw new Error(error);
}
//you can use never, when function does not have 'return'
function calc(a: number, b: number): number {
  return a + b;
}
function toUpperCase(value: string): string {
  return value.trim();
}
//Function-Interface
interface MyPosition {
  x: number | undefined;
  y: number | undefined;
}
interface MyPositionDefault extends MyPosition {
  default: string;
}

function position(): MyPosition;
function position(a: number): MyPositionDefault;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number) {
  if (!a && !b) {
    return { x: undefined, y: undefined };
  }
  if (a && !b) {
    return { x: a, y: undefined, default: a.toString() };
  }

  return { x: a, y: b };
}

console.log('Empty', position());
console.log('One param', position(42));
console.log('Two params', position(42, 23));
