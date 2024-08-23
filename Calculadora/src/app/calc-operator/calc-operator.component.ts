import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-calc-operator',
  standalone: true,
  imports: [],
  templateUrl: './calc-operator.component.html',
  styleUrl: './calc-operator.component.css'
})
export class CalcOperatorComponent {
  @Input() numberA: number = 0;
  @Input() numberB: number = 0;
  @Output() resultEvent = new EventEmitter<number>();
  @Output() clearEvent = new EventEmitter<void>();

  add(){
    this.resultEvent.emit( Number(this.numberA) + Number(this.numberB));
  }
  substract(){
    this.resultEvent.emit(Number(this.numberA) - Number(this.numberB));
  }
  powerOf(){
    this.resultEvent.emit(Number(this.numberA) ** Number(this.numberB));
  }
  multiply(){
    this.resultEvent.emit(Number(this.numberA) * Number(this.numberB));
  }
  divide(){
    this.numberB == 0 ? this.resultEvent.emit(0) : this.resultEvent.emit(Number(this.numberA) / Number(this.numberB));
  }
  clear(){
    this.clearEvent.emit();
  }
}
