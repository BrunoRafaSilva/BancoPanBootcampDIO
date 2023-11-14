const pessoa = {
    nome: 'Bruno R L Silva',
    idade: 24,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

console.log(pessoa.nome)
console.log(pessoa.idade)

pessoa.altura = 2.05

console.log(pessoa.altura)

const atributo = 'idade'
pessoa.descrever()
console.log(pessoa[atributo])
