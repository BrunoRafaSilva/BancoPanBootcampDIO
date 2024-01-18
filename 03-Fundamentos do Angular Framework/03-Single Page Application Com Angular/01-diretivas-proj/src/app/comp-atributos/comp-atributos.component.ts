import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css'],
})
export class CompAtributosComponent implements OnInit {
  estilo: string = 'diable';
  corFundo: string = 'green';
  corDaFonte: string = 'yellow';
  item: string = '';
  constructor() {}
  lista: string[] = [];
  isEnableBlock: boolean = true;

  adicionarLista() {
    this.lista.push(this.item);
  }

  ngOnInit(): void {}
  trocar() {
    if (this.estilo === 'disable') {
      this.estilo = 'enable';
    } else {
      this.estilo = 'disable';
    }
  }
}
