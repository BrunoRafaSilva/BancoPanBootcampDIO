//tipos primitivos : boolean, number, string

let ligado: boolean = false;
let nome: string = "bruno";
let idade: number = 24;

//tipos especiais : null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void
let retorno: void;
let qualquer: any = 5165616;

//objeto - sem previsibilidade
let produto: object = {
  name: "felipe",
  cidade: "sp",
  idade: 30,
};

//type objeto com previsibilidade, sheipado
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};
let meuProduto: ProdutoLoja = {
  nome: "tenis",
  preco: 89.58,
  unidades: 5,
};

//arrays | vetores
let dados: string[] = ["bruno", "nathalia", "sandra"];
let dados2: Array<string> = ["bruno", "nathalia", "sandra"];

//array de multitipos
let infos: (string | number)[] = ["bruno", 24];

//tuplas -> ele deixa a ordem das informações que possa ser inseridas, se eu determinar number, nao poderá inserir string na ordem
let boleto: [string, number, number] = ["agua conta", 199.9, 145611115];

//arrays métodos -> são os mesmos metodos reaproveitados do javascript
dados.pop();
//console.log(dados);

//data
let aniversario: Date = new Date("2022-12-01 05:00");
//console.log(aniversario.toString());
