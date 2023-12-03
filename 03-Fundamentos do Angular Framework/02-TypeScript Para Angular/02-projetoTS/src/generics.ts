//generics
function concatArray(...itens: any[]): any[] {
  return new Array().concat().concat(...itens);
}

const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["Bruno", "silva"], ["Lucena"]);

numArray.push("bruno")
console.log(numArray);
console.log(stgArray);

//definindo tipos especificos durante a introdução de valores
function concatArray2<T>(...itens: T[]): T[] {
  return new Array().concat().concat(...itens);
}

const numArray2 = concatArray2<number[]>([1, 5], [3]);
const stgArray2 = concatArray2<string[]>(["Bruno", "silva"], ["Lucena"]);

//numArray2.push("bruno") isso vai dar erro