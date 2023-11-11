/*

Faça um programa para calcular o valor de uma viagem

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem; 

*/

//valor da gasolina
const gasPrice = 5.69
//gasto médio por KM
const avgExpanseKM = 11
//distância da viagem
let distanceKM = 56

//Quantidade de gasolina utilizada
let gasQTD = distanceKM / avgExpanseKM
console.log(gasQTD)

//valor da viagem
let valueTravel = gasQTD * gasPrice
console.log(`O valor final da viagem de ${distanceKM}KM será de R$${valueTravel.toFixed(2)}`)

