"use strict";
//attribute decorator
//atributo adicionado em cima de uma propriedade
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function minLength(length) {
    return (target, key) => {
        let _value = target[key];
        // console.log(target[key]);
        // console.log(key);
        const getter = () => _value;
        const setter = (value) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`);
            }
            else {
                _value = value;
                console.log(value);
            }
            Object.defineProperty(target, key, {
                get: getter,
                set: setter,
            });
        };
    };
}
class Api1 {
    constructor(name) {
        this.name = name;
    }
}
__decorate([
    minLength(10)
], Api1.prototype, "name", void 0);
const api1 = new Api1("eu");
console.log(api1.name);
