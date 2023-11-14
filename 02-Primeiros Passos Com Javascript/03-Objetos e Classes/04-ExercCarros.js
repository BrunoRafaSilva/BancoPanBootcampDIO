/*

    1 - Crie uma classe para representar carros.
    Os carros possuem marca, uma cor e um gasto médo de combustivel por KM rodado.
    crie um método que dado a quantidade de quilômetros e o preço do combustivel nos dê o valor gasto em reais para realizar este percurso.

*/

class Car {
  brand;
  color;
  AvgPerKm;
  resposta;

  constructor(brand, color, AvgPerKm) {
    this.brand = brand;
    this.color = color;
    this.AvgPerKm = 1 / AvgPerKm;
  }

  travelExpanse(distance, fuelValue) {
    this.resposta = distance * this.AvgPerKm * fuelValue;
    return this.resposta.toFixed(2);
  }
}

const myCar = new Car("Ford", "Escort", 12, 5.79);

console.log(myCar.travelExpanse(70, 5));
