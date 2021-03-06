import { TranslateService } from '@ngx-translate/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { isNotBlankOrEmpty } from 'src/app/utils/stringUtils';

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

  constructor(private translate: TranslateService) {
    this.value = '';
    this.label = '';
  }

  valueChange(event: any): void {
    this.onValueChange.emit(event);
  }

  hasLabel(): boolean {
    return isNotBlankOrEmpty(this.label);
  }
}
