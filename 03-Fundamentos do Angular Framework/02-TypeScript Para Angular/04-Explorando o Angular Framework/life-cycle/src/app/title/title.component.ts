import { Component,Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() nome:string = ''

  nome2: string = 'Bruno';

  constructor() {
    console.log(`Construtor ${this.nome}`);
  }
  ngOnChanges(): void {
    console.log(`OnChanges ${this.nome}` + 'x');
  }
  ngOnInit(): void {
    this.nome2 = `Olá ${this.nome}!`;
    console.log(`OnInit ${this.nome}`);
    //throw new Error('Method not implemented.');
  }
}
