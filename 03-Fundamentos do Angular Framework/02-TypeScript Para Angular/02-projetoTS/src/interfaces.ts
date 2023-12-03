// interfaces (type x interface)
type robot = {
  id: number | string;
  readonly name: string;
};
interface robot2 {
  readonly id: number | string;
  name: string;
  sayHello(): string;
}
const bot1: robot = {
  id: 1,
  name: "megaman",
};

const bot2: robot2 = {
  id: "1",
  name: "interface",
  sayHello: function (): string {
    throw new Error("Function not implemented.");
  },
};

console.log((bot1.id = "roberto carlos"));
console.log(bot2);
/**
 * readonly faz com que o valor não possa ser alterado depois?
 */

class Pessoa implements robot2 {
  id: string | number;
  name: string;

  constructor(id: string | number, name: string) {
    this.id = id;
    this.name = name;
  }
  sayHello(): string {
    return `hello, i'm ${this.name}`;
  }
}


const p = new Pessoa(1, 'gutsman')
console.log(p)
console.log(p.sayHello())