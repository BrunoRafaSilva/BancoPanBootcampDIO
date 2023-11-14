class Pessoa{
    nome
    idade

    descrever() {
        return (`Seu nome é ${this.nome} e sua idade é ${this.idade}`);
    }
}

const pessoa1 = new Pessoa()
pessoa1.nome = 'Bruno Silva'
pessoa1.idade = 22

console.log(pessoa1.descrever())