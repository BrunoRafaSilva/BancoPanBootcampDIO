"use strict";
//classes  pode ser utilizar opcionais '?' igual dart
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        //void porquer ele nao retornará nenhum valor reutilizavel
        console.log(`attack with ${this.strength} points`);
    }
}
const p1 = new Character("", 10, 98);
console.log(p1.attack());
