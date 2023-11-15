const {gets, print}= require('./01-funcoes-auxiliares')

const pessoa = {
  nome: "Bruno",
  idade: 24,
};

//ambos tem a mesma funcionalidade, porém com a primeira opção eu consigo importar mais dados
const { nome } = pessoa;
const idade = pessoa.idade;

print('Função importada com sucesso!')