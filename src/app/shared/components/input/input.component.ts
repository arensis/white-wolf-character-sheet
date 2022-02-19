import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'arm-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input()
  value: string;
  @Input()
  label: string = '';
  @Input()
  type: string = 'text';

  @Output()
  valueChange = new EventEmitter<string>();

  constructor() {
    this.value = '';
    this.label = '';
  }
}
