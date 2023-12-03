//funções
function addNumber(x: number, y: number) {
  return x + y;
}
function addToHello(name: any) {
  return `hello ${name}`;
}

let soma: number = addNumber(4, 7); //a variavel tem que ser do tipo da função, para poder receber o retorno dela

console.log(soma);
console.log(addToHello("Bruno"));

/* 
Função multitipo
*/

function callToPhone(phone: number | string): number | string {
  return phone;
}

console.log(callToPhone("numero nao existe"));
console.log(callToPhone(6565151561));

/**
 funções async
 */

async function getDataBase(id: number): Promise<number | string> {
  return "felipe";
}
