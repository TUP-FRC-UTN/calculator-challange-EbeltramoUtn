import { Component } from '@angular/core';

@Component({
  selector: 'app-calc-view',
  standalone: true,
  imports: [],
  templateUrl: './calc-view.component.html',
  styleUrl: './calc-view.component.css'
})
export class CalcViewComponent {
  numberA : number = 0;
  numberB : number = 0;

  valorA(event : any){
    this.numberA=event.target.value
  }
  valorB(event : any){
    this.numberB=event.target.value

  }
}
