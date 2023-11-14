const notas = []

notas.push(5)
notas.push(7)
notas.push(8)
notas.push(5)

//console.log(notas)

let soma = 0

for(nota in notas){

    soma = soma + parseInt(notas[nota])
}

console.log(soma)

const media = soma / notas.length
console.log(media)