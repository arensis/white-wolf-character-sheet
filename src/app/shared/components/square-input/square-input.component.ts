import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'arm-square-input',
  templateUrl: './square-input.component.html',
  styleUrls: ['./square-input.component.scss']
})
export class SquareInputComponent implements OnInit {
  @Input()
  isEditable: boolean = true;
  @Input()
  value: number = 0;
  @Input()
  itemsAmount: number = 10;
  @Input()
  maxValue: number = 10;

  @Output()
  onValueChange = new EventEmitter<number>();

  itemsArray!: number[];

  constructor() {}

  ngOnInit(): void {
    this.itemsArray = Array.from(Array(this.itemsAmount),(x,i)=>i);
  }

  fillSquare(index: number): void {
    if (this.isEditable) {
      this.calculateValue(index);
    }
  }

  trackByFn(item: any, index: number): number {
    return index;
  }

  private calculateValue(squareIndex: number) {
    if (this.isSettingToLevelOne(squareIndex)) {
      this.setLevelToOne();
    } else if (this.isRemovingAllLevels(squareIndex)) {
      this.removeAllLevels();
    } else if (this.isRemovingCurrentLevel(squareIndex)) {
      this.removeCurrentLevel();
    } else {
      this.updateLevel(squareIndex);
    }
  }

  private isSettingToLevelOne(squareIndex: number): boolean {
    return squareIndex === 0 && this.value > 1;
  }

  private isRemovingAllLevels(squareIndex: number): boolean {
    return squareIndex === 0 && this.value === 1;
  }

  private isRemovingCurrentLevel(squareIndex: number): boolean {
    return this.value === (squareIndex + 1);
  }

  private setLevelToOne(): void {
    this.value = 1;
    this.updateValue();
  }

  private removeAllLevels(): void {
    this.value = 0;
    this.updateValue();
  }

  private removeCurrentLevel(): void {
    this.value = this.value - 1;
    this.updateValue();
  }

  private updateLevel(squareIndex: number): void {
    const requestedValue = squareIndex + 1;
    if (requestedValue > this.maxValue) {
      this.value = this.maxValue;
    }
    this.value = squareIndex + 1;
    this.updateValue();
  }

  private updateValue(): void {
    this.onValueChange.emit(this.value);
  }

  isEditablePoint(index: number) {
    return (index + 1) <= this.maxValue;
  }
}
