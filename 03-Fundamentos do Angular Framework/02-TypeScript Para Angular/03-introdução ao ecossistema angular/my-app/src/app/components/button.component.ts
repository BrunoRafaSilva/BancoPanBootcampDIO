import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class Button {
  @Input() label:string = ''; // estou pegando os dados do componente pai e inserindo
  buttonText: string = 'ACESSAR'; // é possivel acessar como string padrão
  buttonTexts: string[] = ['VENDER', 'COMPRAR']; //definir como array
  buttonNumber: number = 1; // como numero
  buttonObject = {
    // e inclusive como objeto
    label: 'adicionar ao carrinho',
  };
}

/**
 * Exemplos de utilização da classe:
  <button>Click aqui</button>
  <button>{{ buttonText }}</button>
  <button>{{ buttonNumber }}</button>
  <button>{{ buttonTexts[0] }}</button>
  <button>{{ buttonTexts[1] }}</button>
  <button>{{ buttonTexts }}</button>
  <button>{{ buttonObject.label }}</button>
 */
