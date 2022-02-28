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
  @Input()
  isEditable: boolean = true;

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
    this.circleArray = [1,2,3,4,5];
  }

  ngOnInit(): void {
    this.totalValue = this.value + this.temporaryValue;
    this.circleArray = Array.from(Array(this.circleAmount),(x,i)=>i);
  }

  ngOnChanges(): void {
    this.totalValue = this.value + this.temporaryValue;
  }

  trackByFn(item: any, index: number): number {
    return index;
  }

  hasLabel(): boolean {
    return isNotBlankOrEmpty(this.label);
  }

  deleteProperty(): void {
    this.onDelete.emit();
  }

  fillCircle(index: number): void {
    if (this.isEditable) {
      this.calculateValue(index);
    } else {
      this.calculateTemporaryValue(index);
    }
  }

  private calculateValue(circleIndex: number) {
    if (this.isSettingToLevelOne(circleIndex)) {
      this.setLevelToOne();
    } else if (this.isRemovingAllLevels(circleIndex)) {
      this.removeAllLevels();
    } else if (this.isRemovingCurrentLevel(circleIndex)) {
      this.removeCurrentLevel();
    } else {
      this.updateLevel(circleIndex);
    }
  }

  private isSettingToLevelOne(circleIndex: number): boolean {
    return circleIndex === 0 && this.value > 1;
  }

  private isRemovingAllLevels(circleIndex: number): boolean {
    return circleIndex === 0 && this.value === 1;
  }

  private isRemovingCurrentLevel(circleIndex: number): boolean {
    return this.value === (circleIndex + 1);
  }

  private setLevelToOne(): void {
    this.value = 1;
    this.updateTotalvalue();
    this.updateValue();
  }

  private removeAllLevels(): void {
    if (this.value <= this.minValue) {
      this.value = this.minValue;
    } else {
      this.value = 0;
    }

    this.updateTotalvalue();
    this.updateValue();
  }

  private removeCurrentLevel(): void {
    this.value = this.value - 1;
    this.updateTotalvalue();
    this.updateValue();
  }

  private updateLevel(circleIndex: number): void {
    const requestedTotalValue = (circleIndex +1) + this.temporaryValue;
    if(requestedTotalValue > this.circleAmount) {
      const difference = requestedTotalValue - this.circleAmount;
      this.temporaryValue = this.temporaryValue - difference;
      this.updateTemporaryValue();
    }
    this.value = circleIndex + 1;
    this.updateTotalvalue();
    this.updateValue();
  }

  private calculateTemporaryValue(circleIndex: number) {
    if (this.isSettingTemporaryValue(circleIndex)) {
      this.setTemporaryValue(circleIndex);
    } else {
      this.temporaryValue = 0;
      this.updateTotalvalue();
      this.updateTemporaryValue();
    }
  }

  private isSettingTemporaryValue(circleIndex: number): boolean {
    return (circleIndex + 1) > this.value;
  }

  private isRemovingCurentTemporaryLevel(circleIndex: number): boolean {
    return (circleIndex +1) === (this.value + this.temporaryValue);
  }

  private setTemporaryValue(circleIndex: number): void {
    if (this.isRemovingCurentTemporaryLevel(circleIndex)) {
      this.temporaryValue = this.temporaryValue - 1;
    } else {
      this.temporaryValue = (circleIndex + 1) - this.value;
    }

    this.updateTotalvalue();
    this.updateTemporaryValue();
  }

  private updateTotalvalue(): void {
    this.totalValue = this.value + this.temporaryValue;
  }

  private updateValue(): void {
    this.onValueChange.emit(this.value);
  }

  private updateTemporaryValue(): void {
    this.onTemporaryValueChange.emit(this.temporaryValue);
  }
}
