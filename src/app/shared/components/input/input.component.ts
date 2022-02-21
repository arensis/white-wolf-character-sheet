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

  @Output()
  valueChange = new EventEmitter<any>();

  @Output()
  onBlur = new EventEmitter<any>();

  constructor() {
    this.value = '';
    this.label = '';
  }

  onBlurEmit(event: any) {
    this.onBlur.emit(event);
  }
}
