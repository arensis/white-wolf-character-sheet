import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'arm-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input()
  value: any;
  @Input()
  label: string = '';
  @Input()
  type: string = 'text';
  @Input()
  isReadOnly: boolean = false;

  @Output()
  onValueChange = new EventEmitter<any>();

  constructor() {
    this.value = '';
    this.label = '';
  }

  valueChange(event: any): void {
    this.onValueChange.emit(event);
  }
}
