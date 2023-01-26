//Boolean Type
const isComleted: boolean = true || false;

//Number Type
const decimal: number = 1;
const integer: number = 7.1;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;

//String Type
const myName: string = 'Max';

//Special Type
const fNull: null = null;
const fUndefiend: undefined = undefined;

//Void Type
//Отсутствующий тип, когда фу-я ничего не возращает
const greetUser = (): void => {
  alert('Hello, nice to see you!');
};

//Array Type
const list1: number[] = [1, 2, 3, 4];
const list2: Array<number> = [1, 2, 3, 4]; //Generic Type

//Turple Type
const list3: [number, string] = [1, 'asd'];

//Any Type
const list4: [any, any, any, any] = ['sda', 1, null, 1];
const list5: Array<any> = ['ada', 1, undefined];

//Enum Type
//Используется для персчесления, чтобы в последущем взять индекс(номер) перечисления
enum Directious {
  Up,
  Down,
  Left,
  Right,
}
Directious.Up; // 0
Directious.Down[1]; // "Down"

enum DirectiousCustomIndex {
  Up = 2,
  Down = 3,
  Left = 7,
  Right,
} // Custom index for enum
Directious.Up; // 2
Directious.Down; // 3
Directious.Left; // 7
Directious.Right; //8

enum Links {
  youtube = 'https://www.youtube.com/',
  vk = 'https://vk.com/',
  facebook = 'https://facebook.com/',
} //пример использования enum
Links.youtube; // 'https://www.youtube.com/'

const enum myLinks {
  vkNews = 'https://vk.com/feed',
} //const используется для оптимизации кода, чтобы при компиляции в js не создавалсь фун-я

//Never Type
//Ипользуется если фун-я возращает ошибку, либо если фун-я постоянно выполняется

function error(msg: string): never {
  throw new Error(msg);
}

function whileTrue(): never {
  while (true) {}
}

//Object Type
//object | null - запись означает объединение типов
function create(o: object | null): void {
  console.log(o);
}

//Type
//Ипользуется для кастомных пользовательских типов
type Name = string;
const SecondName: Name = 'Appocka';
