//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//Saiba mais sobre Expressões Regulares: 
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_expressions

// O gets() receberá um número de conta como entrada:
const accountNumber = 656526; //exemplo

//Utilizo o operador de propagação e ao mesmo tempo transformo em String para que ele funcione, gerando assim a string com os numeros e posteriormente
//(através do map) converto esse resultado de volta para Number, resultando em um Array
const newAccountNumber = [...String(accountNumber)].map(Number);

//defino uma variavel para guardar a soma de todos os itens do novo Array e executo um for nela
let sumAccountNumbers = 0;
for (let number of newAccountNumber) {
  sumAccountNumbers += number;
}

//faço um encadeamento de if else
if (newAccountNumber.length === 6) {
  if (newAccountNumber[0] !== 0) {
    if (sumAccountNumbers > 30) {
      console.log("Numero de conta invalido: A soma dos digitos e maior que 30.");
    } else{
        console.log('Numero de conta valido.')
    }
  } else {
    console.log(
      "Numero de conta invalido: O primeiro digito deve ser maior que zero."
    );
  }
}
