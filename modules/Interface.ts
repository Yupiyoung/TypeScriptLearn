// Interface - you can make interface, ? - optional, readonly - only for reading
interface Profile {
  readonly id: number;
  login: string;
  password: string;
  description?: string;
}
const max: Profile = {
  id: 1,
  login: 'Maxsup@as.aad',
  password: '1234asdasd',
  description: 'asdasdas',
};
const dima = {} as Profile;
const musilim = <Profile>{};
interface CheckProfile extends Profile {
  getInfo: () => string;
}
const dunya: CheckProfile = {
  id: 3,
  login: 'ad',
  password: 'adad',
  getInfo(): string {
    return this.login;
  },
};
// Interface-Class
interface IClock {
  time: Date;
  setTime(date: Date): void;
}
class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}
// Interface - Key
interface Style {
  [key: string]: string | number;
}
const css = {
  border: '1px solid black',
  marginTop: '2px',
};
