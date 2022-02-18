import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'arm-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  @Input()
  value: string;
  @Input()
  label: string = '';

  @Output()
  valueChange = new EventEmitter<string>();

  constructor() {
    this.value = '';
    this.label = '';
  }

  ngOnInit(): void {
  }
}
