function writeMyName(name) {
  return(`Seu nome é ${name}. \n`);
}

function maiorIdade(idade) {
  if (idade >= 18) {
    return "Você é maior de idade!";
  } else {
    return "Você é menor de idade!";
  }
}

function main(name, age){
    console.log(writeMyName(name), maiorIdade(age))
}

main('Bruno', 25)
