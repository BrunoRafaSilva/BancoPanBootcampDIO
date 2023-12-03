"use strict";
//tipos primitivos : boolean, number, string
let ligado = false;
let nome = "bruno";
let idade = 24;
//tipos especiais : null, undefined
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any, void
let retorno;
let qualquer = 5165616;
//objeto - sem previsibilidade
let produto = {
    name: "felipe",
    cidade: "sp",
    idade: 30,
};
let meuProduto = {
    nome: "tenis",
    preco: 89.58,
    unidades: 5,
};
//arrays | vetores
let dados = ["bruno", "nathalia", "sandra"];
let dados2 = ["bruno", "nathalia", "sandra"];
//array de multitipos
let infos = ["bruno", 24];
//tuplas -> ele deixa a ordem das informações que possa ser inseridas, se eu determinar number, nao poderá inserir string na ordem
let boleto = ["agua conta", 199.9, 145611115];
//arrays métodos -> são os mesmos metodos reaproveitados do javascript
dados.pop();
//console.log(dados);
//data
let aniversario = new Date("2022-12-01 05:00");
//console.log(aniversario.toString());
