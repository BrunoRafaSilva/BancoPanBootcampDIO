//attribute decorator
//atributo adicionado em cima de uma propriedade
function minLength(length: number) {
  return (target: any, key: string) => {
    let _value = target[key];

    const getter = () => "[play]" + _value;
    const setter = (value: string) => {
      if (value.length < length) {
        throw new Error(`Tamanho menor do que ${length}`);
      } else {
        _value = value;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

class Api1 {
  //defino uma quantidade minima de strings
  @minLength(10)
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const api1 = new Api1("oi");
console.log(api1.name);
