const moneyToConvert = parseFloat(gets());
const currencyOrigin = gets();
const currencyDestiny = gets();

if (!isNaN(moneyToConvert)) {
  //Definição fixa das taxas de câmbio
  const exchangeRateBRLtoUSD = 0.1875;
  const exchangeRateBRLtoEUR = 0.152;
  const exchangeRateUSDtoBRL = 5.3333;
  const exchangeRateEURtoBRL = 6.5789;

  //Variavel que irá receber o resultado
  let finalCurrency = 0;

  //Passando por um switch para retornar o valor correto
  switch (true) {
    case currencyOrigin === "BRL" && currencyDestiny === "USD":
        sumCurrency = moneyToConvert * exchangeRateBRLtoUSD;
        finalCurrency = sumCurrency.toFixed(2)
      console.log(
        `${moneyToConvert} ${currencyOrigin} equivalem a ${finalCurrency} ${currencyDestiny}.`
      );
      break;
    case currencyOrigin === "BRL" && currencyDestiny === "EUR":
        sumCurrency = moneyToConvert * exchangeRateBRLtoEUR;
        finalCurrency = sumCurrency.toFixed(2)
      console.log(
        `${moneyToConvert} ${currencyOrigin} equivalem a ${finalCurrency} ${currencyDestiny}.`
      );
      break;
    case currencyOrigin === "USD" && currencyDestiny === "BRL":
        sumCurrency = moneyToConvert * exchangeRateUSDtoBRL;
        finalCurrency = sumCurrency.toFixed(2)
      console.log(
        `${moneyToConvert} ${currencyOrigin} equivalem a ${finalCurrency} ${currencyDestiny}.`
      );
      break;
    case currencyOrigin === "EUR" && currencyDestiny === "BRL":
      sumCurrency = moneyToConvert * exchangeRateEURtoBRL;
      finalCurrency = sumCurrency.toFixed(2)
      console.log(
        `${moneyToConvert} ${currencyOrigin} equivalem a ${finalCurrency} ${currencyDestiny}.`
      );
      break;
  }
}
