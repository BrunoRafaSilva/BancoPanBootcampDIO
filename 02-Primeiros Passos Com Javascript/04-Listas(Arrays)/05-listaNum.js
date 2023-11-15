/*
    Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada número par encontrado
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

for (number in numbers) {
  if (numbers[number] % 2 === 0) {
    console.log(numbers[number]);
  }
}
