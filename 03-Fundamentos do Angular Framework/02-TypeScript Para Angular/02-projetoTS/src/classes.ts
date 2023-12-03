//classes  pode ser utilizar opcionais '?' igual dart
class Character {
  name?: string;
  strength: number;
  skill: number;

  constructor(name: string, strength: number, skill: number) {
    this.name = name;
    this.strength = strength;
    this.skill = skill;
  }
  attack(): void {
    //void porquer ele nao retornará nenhum valor reutilizavel
    console.log(`attack with ${this.strength} points`);
  }
}

const p1 = new Character("", 10, 98);
console.log(p1.attack())
