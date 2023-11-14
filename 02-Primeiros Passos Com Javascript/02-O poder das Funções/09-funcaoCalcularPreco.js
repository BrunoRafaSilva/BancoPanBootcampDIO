/*
Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function taxes(method, value) {
    switch (true) {
        case method === 1:
            discount = value * 0.10
            finalValue = value - discount
            break
        case method === 2:
            discount = value * 0.15
            finalValue = value - discount
            break
        case method === 3:
            discount = 1
            finalValue = value - discount
            break
        case method === 4:
            acrescent = value * 0.10
            finalValue = value + acrescent
            break
        default:
            return ('Metodo de pagamento não aceito')
    }
    return finalValue
}

console.log(taxes(1,15))