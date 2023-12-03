"use strict";
//classes  pode ser utilizar opcionais '?' igual dart
/*
    data modifiers
    public = padrão
    private = não acessivel fora da classe
    protected = só pode ser enxergado na classe e em subclasses

*/
class Character1 {
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
const p2 = new Character1("ryu", 10, 98);
p2.attack()
