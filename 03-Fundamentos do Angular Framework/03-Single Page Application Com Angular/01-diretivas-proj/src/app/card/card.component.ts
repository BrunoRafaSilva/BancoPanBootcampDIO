import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  produtos: string[] = [];
  menuType: string = ''; //switchcase

  constructor() {
    this.produtos = ['mouse', 'teclado', 'cabo', 'fonte'];
  }

  ngOnInit(): void {}

  adicionar() {
    this.produtos.push('Bruno');
  }

  remover(index: number) {
    alert(index);
    this.produtos.splice(index, 1); //vou deletar um elemento do index por isso o numero 1
  }
}
