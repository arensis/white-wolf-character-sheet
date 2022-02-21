import { Attributes } from './../../../shared/model/vampire-dark-ages/attributes/Attributes';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'arm-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent {
  @Input()
  attributes: Attributes;

  @Output()
  attributesChange = new EventEmitter<Attributes>();

  constructor() {
    this.attributes = {} as Attributes;
  }
}
