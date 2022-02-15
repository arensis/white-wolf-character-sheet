import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'arm-circle-input',
  templateUrl: './circle-input.component.html',
  styleUrls: ['./circle-input.component.scss']
})
export class CircleInputComponent {
  @Input()
  circleAmount: number;
  @Input()
  label: string;
  @Input()
  value!: number;
  @Input()
  minValue: number = 0;

  @Output()
  valueChange = new EventEmitter<number>()

  circleArray: number[];
  inputValue: number;

  constructor() {
    this.circleAmount = 5;
    this.label = '';
    this.inputValue = 0;
    this.circleArray = Array.from(Array(this.circleAmount),(x,i)=>i);
  }

  trackByFn(item: any, index: number): number {
    return index;
  }

  fillCircle(index: number): void {
    if (index === 0 && this.value > 1) {
      this.value = 1;
    } else if (index === 0 && this.value === 1) {
      if (this.value <= this.minValue) {
        this.value = this.minValue;
      } else {
        this.value = 0;
      }
    } else if (this.value === (index + 1)) {
      this.value = index;
    } else {
      this.value = index + 1;
    }
  }
}
