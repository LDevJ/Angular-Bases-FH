import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3 class="container">Counter: {{counter}}</h3>
  <button class="btn btn-outline-primary mx-2" (click)="increaseByOne(+1)"> +1 </button>
  <button class="btn btn-outline-danger" (click)="resetCounter()">Reset</button>
  <button class="btn btn-outline-primary mx-2" (click)="increaseByOne(-1)"> -1 </button>
  `,
})
export class CounterComponent {
  constructor(){}

  public counter: number = 0;

  increaseByOne( value:number ):void{
    this.counter += value;
  }
  resetCounter():void{
    this.counter = 0;
  }
}
