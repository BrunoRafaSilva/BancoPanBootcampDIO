//classes  pode ser utilizar opcionais '?' igual dart

/* 
    data modifiers
    public = padrão
    private = não acessivel fora da classe e nao acessivel também nas subclasses
    protected = só pode ser enxergado na classe e em subclasses

*/
class Character1 {
  protected name?: string;
  readonly strength: number;
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

const p2 = new Character1("ryu", 10, 98);
p2.attack();
