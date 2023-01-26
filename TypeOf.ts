// Base types
const bool: boolean = false;
const str: string = 'a';
const num: number = 1;
const undef: undefined = undefined;
const nul: null = null;

// Array
const arrNum: [number] = [1];
const arrNum1: number[] = [1];
const arrNum2: Array<number> = [1];
const contact: [string, number] = ['max', 123432];

// Type - for create native types
type Login = string;
const login: Login = 'Max';

type Id = string | number;
const id = 1;
const id2 = '2';
