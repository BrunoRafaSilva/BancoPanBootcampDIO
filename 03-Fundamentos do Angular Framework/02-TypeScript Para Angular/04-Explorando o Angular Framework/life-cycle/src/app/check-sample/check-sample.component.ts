import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css'],
})
export class CheckSampleComponent
  implements
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,OnDestroy
{
  quantidade: number = 0;

  constructor() {
    console.log('constructor');
  }

  adicionar() {
    this.quantidade += 1;
  }

  decrementar() {
    this.quantidade -= 1;
  }

  //checked->content->view
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  //quando o primeiro conteudo é iniciado
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  //verifica o conteudo após alguma alteração
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  //após a inicialização da view
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    console.log("Goodbye my friend. The component is dead.")
  }
}
