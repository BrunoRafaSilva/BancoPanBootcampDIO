/*
    Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1-100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

    dados de entrada:
    5
    50
    10
    98
    23

    saida:
    98
*/
const {higherNumber} = require('./00-funcoesauxiliaresdesafios')

const numbers = [5, 50, 10, 98, 23];

winningNumber = higherNumber(numbers)

console.log(`And the wining number in the class is: ${winningNumber}`)

