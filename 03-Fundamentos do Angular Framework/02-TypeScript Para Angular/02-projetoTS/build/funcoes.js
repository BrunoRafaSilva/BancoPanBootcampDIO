"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//funções
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `hello ${name}`;
}
let soma = addNumber(4, 7); //a variavel tem que ser do tipo da função, para poder receber o retorno dela
console.log(soma);
console.log(addToHello("Bruno"));
/*
Função multitipo
*/
function callToPhone(phone) {
    return phone;
}
console.log(callToPhone("numero nao existe"));
console.log(callToPhone(6565151561));
/**
 funções async
 */
function getDataBase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "felipe";
    });
}
