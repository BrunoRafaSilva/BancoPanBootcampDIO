/*
Neste desafio, você deve criar uma solução que permita verificar o saldo de uma conta bancária. Utilize o conceito de funções, "if" e "else", entre outros, para a resolução. Dessa forma, o programa terá um valor fixo, simulando o saldo da conta, assim como um nome fixo representativo para o titular da conta. A interação ocorrerá quando o usuário escolher uma das três opções de verificação das informações da conta, sendo:

[ 1 ] - Verifica o Saldo;
[ 2 ] - Realiza um Depósito;
[ 3 ] - Realizar Saque;
*/

//Crio uma classe conta para simular uma conta bancaria e suas ações
class Account {
  //Utilizo um constructor para pegar os parametros obrigatorios
  constructor(accountBalance, cardholderName) {
    this.accountBalance = parseFloat(accountBalance);
    this.cardholderName = cardholderName;
  }

  //Função de verificar saldo
  verifyBalance() {
    console.log(
      `Saldo da conta de ${
        this.cardholderName
      }: R$${this.accountBalance.toFixed(2)}`
    );
  }

  //Função de realizar deposito
  makeDeposit(value) {
    const valueDeposit = parseFloat(value);
    this.accountBalance += valueDeposit;
    console.log(
      `Deposito de R$${valueDeposit.toFixed(
        2
      )} realizado com sucesso. Saldo total: R$${this.accountBalance.toFixed(
        2
      )}`
    );
  }

  //Função de saque
  withdraw(value) {
    const valueWithdraw = parseFloat(value);
    this.accountBalance -= valueWithdraw;
    console.log(
      `Saque de R$${valueWithdraw.toFixed(
        2
      )} realizado com sucesso. Saldo total: R$${this.accountBalance.toFixed(
        2
      )}`
    );
  }
}

//defino um cliente na classe
const client = new Account("2000.00", "Mariane");

//crio uma função para receber um input e dar retornos através de um switch para cada ação
function cashMachine(option, value = 0) {
  switch (true) {
    case option === 1:
      client.verifyBalance();
      break;
    case option === 2:
      client.makeDeposit(value);
      break;
    case option === 3:
      client.withdraw(value);
      break;
    default:
      console.log("Opcao invalida. Tente novamente.");
      break;
  }
}

const option = 3;
const value = 300;

cashMachine(option, value);
