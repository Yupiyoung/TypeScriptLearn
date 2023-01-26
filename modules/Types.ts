interface Person {
  name: string;
  age: number;
}
type PersonKeys = keyof Person; //'name' | 'age'
const myName: PersonKeys = 'name';
console.log(myName);

type User = {
  _id: string;
  name: string;
  email: string;
  createdAt: Date;
};

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>;

type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>;

const noMeta1: UserKeysNoMeta1 = 'name';
const noMeta2: UserKeysNoMeta1 = 'email';
