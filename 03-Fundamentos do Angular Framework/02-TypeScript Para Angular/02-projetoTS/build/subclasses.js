"use strict";
//classes  pode ser utilizar opcionais '?' igual dart
/*
    data modifiers
    public = padrão
    private = não acessivel fora da classe e nao acessivel também nas subclasses
    protected = só pode ser enxergado na classe e em subclasses

*/
//superclasse
class Character3 {
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
//subclasse
//utilizo o super para dizer quais dados eu quero extrair
class Magician extends Character3 {
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}
const p3 = new Character3("ryu", 10, 98);
p2.attack();
const pm = new Magician("mago", 9, 30, 100);
