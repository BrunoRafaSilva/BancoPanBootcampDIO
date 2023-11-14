class Pessoa{
    nome
    idade

    constructor(nome = 'cliente padrão', idade = 15){
        this.nome = nome
        this.idade = idade
    }

    descrever() {
        return (`Seu nome é ${this.nome} e sua idade é ${this.idade}`);
    }   
}

const pessoa1 = new Pessoa()
console.log(pessoa1)

const pessoa2 = new Pessoa('Bruno', 24)
console.log(pessoa2)



var resultad

