import { Component } from '@angular/core';
import { CalcOperatorComponent } from '../calc-operator/calc-operator.component';

@Component({
  selector: 'app-calc-view',
  standalone: true,
  imports: [CalcOperatorComponent],
  templateUrl: './calc-view.component.html',
  styleUrl: './calc-view.component.css'
})
export class CalcViewComponent {
  numberA : number = 0;
  numberB : number = 0;
  result: number=0;

  valorA(event : any){
    this.numberA=event.target.value
  }
  valorB(event : any){
    this.numberB=event.target.value

  }
  updateResult(result:number){
    this.result = result;
  }
  clear(){
    this.result = 0;
    this.numberA=0;
    this.numberB=0;

  }
}
