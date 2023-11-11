function incrementTaxs(valor, percentualJuros){
    const valorDeAcrecimo = (percentualJuros/100) * valor;
    return valor + valorDeAcrecimo
}

console.log(incrementTaxs(100,23))