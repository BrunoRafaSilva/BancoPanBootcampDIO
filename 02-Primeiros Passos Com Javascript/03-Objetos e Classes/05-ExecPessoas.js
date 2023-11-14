/* 
    Crie uma classe para repesentar pessoas;
    Para cada pessoa teremos os atributos nome, peso e altura;
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamado José que tenha 70KG de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC
*/

class Person {
  name;
  weight;
  height;
  imcResult;

  constructor(name, weight, height) {
    this.name = name;
    this.height = height;
    this.weight = weight;
  }

  calculateIMC() {
    this.imcResult = this.weight / (this.height * this.height);
    return this.imcResult.toFixed(0);
  }

  classifyImc() {
    const imc = parseFloat(this.calculateIMC());

    switch (true) {
      case imc < 18.5:
        return "Você está abaixo do peso, busque se alimentar mais!";
        break;
      case imc >= 18.5 && imc <= 25:
        return "Você está no peso ideal para sua altura!";
        break;
      case imc >= 25 && imc <= 30:
        return "Você se encontra acima do peso!";
        break;
      case imc >= 30 && imc <= 40:
        return "Você está sendo considerado obeso, busque comer menos para sua saúde!";
        break;
      case imc >= 40:
        return "Sua situação já é alarmente!!!!!!!! está com obesidade grave!!!!!!";
        break;
      default:
        console.log("O valor inserido é invalido, insira apenas números!");
    }
  }
}

const person1 = new Person("José", 70, 1.75);

console.log(person1.calculateIMC());

console.log(person1.classifyImc());
