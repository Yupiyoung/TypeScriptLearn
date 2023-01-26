//Function Example
//? - опциональный аргумент который можно передать, а можно не передавать
//Чтобы задать аргументы функции нужно написать name: string
//1)Если фун-я возращает что либо то пишем после аргументов то что она возрращает, либо пишем any(если мы однозанчно не знаем что вернет фун-я)
//2)Если фун-я не возращает что либо, то пишем void
//3)Если фун-я бескончено выполняется или возращает ошибку(throw error), то пишем never
// ======================= //
function createPassword(name: string, age?: number): number {
  return age + name.length;
} //1)

function generateName(name: string, age?: number): void {
  console.log(name + age);
} //2)

function startBot(passowrd: string): never {
  while (true) {}
} //3)

//Rest Type (...)
function generateSkills(name: string, ...skills: Array<string>): string {
  return `${name}, у тебя есть - ${skills}`;
}
