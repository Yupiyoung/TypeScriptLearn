//Class
class TypeScript {
  private version: string;

  constructor(verson: string) {
    this.version = verson;
  }

  getInfo(name: string): string {
    return `[${name}], TypeScript Version is ${this.version}`;
  }
}
const typeSctipt = new TypeScript('1.18.1');

//modificators (public, protected, private)

class Animal {
  public voice: string = '';
  // we can use in Everything
  protected color: string = ''; // we can use inside Class and inside Extend Class
  private name: string = ''; // we can use only inside THIS Class
}

//Abstract Class
abstract class Compomemt {
  abstract render(): void;
}

class App extends Compomemt {
  render(): void {
    console.log('asd');
  }
}
