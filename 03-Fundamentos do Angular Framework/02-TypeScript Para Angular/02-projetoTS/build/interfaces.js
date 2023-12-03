"use strict";
const bot1 = {
    id: 1,
    name: "megaman",
};
const bot2 = {
    id: "1",
    name: "interface",
    sayHello: function () {
        throw new Error("Function not implemented.");
    },
};
console.log((bot1.id = "roberto carlos"));
console.log(bot2);
/**
 * readonly faz com que o valor não possa ser alterado depois?
 */
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello, i'm ${this.name}`;
    }
}
const p = new Pessoa(1, 'gutsman');
console.log(p);
console.log(p.sayHello());
