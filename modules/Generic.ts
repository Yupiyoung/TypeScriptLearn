const arrayNum: Array<number> = [1, 2, 3, 4];
const arrayStr: Array<string> = ['1', '2', '3', '4'];

function reverse<T>(array: T[]): T[] {
  return array.reverse();
}
console.log(reverse(arrayStr));
