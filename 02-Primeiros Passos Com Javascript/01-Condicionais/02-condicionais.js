const numero = 10;

const eNumeroPar = numero % 2;

function numeroPar(num) {
  if (!num % 2) {
    return true;
  } else {
    return false;
  }
}

console.log(numeroPar(5));
console.log(eNumeroPar);
