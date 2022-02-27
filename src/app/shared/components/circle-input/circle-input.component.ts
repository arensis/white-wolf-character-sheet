import { Component, EventEmitter, Input, Output, OnInit, OnChanges } from '@angular/core';
import { isNotBlankOrEmpty } from 'src/app/utils/stringUtils';

@Component({
  selector: 'arm-circle-input',
  templateUrl: './circle-input.component.html',
  styleUrls: ['./circle-input.component.scss']
})
export class CircleInputComponent implements OnInit, OnChanges {
  @Input()
  circleAmount: number;
  @Input()
  label: string;
  @Input()
  value: number = 0;
  @Input()
  temporaryValue: number = 0;
  @Input()
  minValue: number = 0;
  @Input()
  isPermanent: boolean = true;

  @Output()
  onValueChange = new EventEmitter<number>();
  @Output()
  onTemporaryValueChange = new EventEmitter<number>();
  @Output()
  onDelete = new EventEmitter<void>();

  circleArray: number[];
  inputValue: number;
  totalValue!: number;

  constructor() {
    this.circleAmount = 5;
    this.label = '';
    this.inputValue = 0;
    this.circleArray = Array.from(Array(this.circleAmount),(x,i)=>i);
  }

  ngOnInit(): void {
    this.totalValue = this.value + this.temporaryValue;
  }

  ngOnChanges(): void {
    this.totalValue = this.value + this.temporaryValue;
  }

  trackByFn(item: any, index: number): number {
    return index;
  }

  fillCircle(index: number): void {
    const editionIsLocked = false;
    if (editionIsLocked) {
      this.calculateTemporaryValue(index);
    } else {
      this.calculateValue(index);
    }
  }

  calculateValue(circleIndex: number) {
    if (circleIndex === 0 && this.value > 1) {
      this.value = 1;
      this.updateTotalvalue();
    } else if (circleIndex === 0 && this.value === 1) {
      if (this.value <= this.minValue) {
        this.value = this.minValue;
        this.updateTotalvalue();
      } else {
        this.value = 0;
        this.updateTotalvalue();
      }
    } else if (this.value === (circleIndex + 1)) {
      this.value = circleIndex;
      this.updateTotalvalue();
    } else {
      this.value = circleIndex + 1;
      this.updateTotalvalue();
    }
  }

  calculateTemporaryValue(circleIndex: number) {

  }

  updateTotalvalue(): void {
    this.updateValue();
    this.totalValue = this.value + this.temporaryValue;
  }

  hasLabel(): boolean {
    return isNotBlankOrEmpty(this.label);
  }

  deleteProperty(): void {
    this.onDelete.emit();
  }

  private updateValue(): void {
    this.onValueChange.emit(this.value);
  }

  temporaryValueChange(): void {
    this.onTemporaryValueChange.emit(this.temporaryValue);
  }
}
