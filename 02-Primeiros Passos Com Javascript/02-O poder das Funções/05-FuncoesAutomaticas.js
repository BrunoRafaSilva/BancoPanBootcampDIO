/*
Calculadora IMC
Formula IMC:
IMC = peso / (altura * altura)

elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 abaixo do peso;
- Entre 18.5 e 25 peso normal;
- Entre 25 e 30 acima do peso;
- Entre 30 e 40 obeso;
- Acima de 40 obesidade grave
*/

function calcIMC(num) {
  switch (true) {
    case num < 18.5:
      return "Você está abaixo do peso, busque se alimentar mais!";
      break;
    case num >= 18.5 && num <= 25:
      return "Você está no peso ideal para sua altura!";
      break;
    case num >= 25 && num <= 30:
      return "Você se encontra acima do peso!";
      break;
    case num >= 30 && num <= 40:
      return "Você está sendo considerado obeso, busque comer menos para sua saúde!";
      break;
    case num >= 40:
      return "Sua situação já é alarmente!!!!!!!! está com obesidade grave!!!!!!";
      break;
    default:
      console.log("O valor inserido é invalido, insira apenas números!");
  }
}

function calcularIMC(peso, altura) {
  let imc = peso / Math.pow(altura, 2);
  return calcIMC(imc);
}

// Main
(function () {
  const peso = 75;
  const altura = 1.95;

  const imc = calcularIMC(peso, altura);
  console.log(imc);
})();

