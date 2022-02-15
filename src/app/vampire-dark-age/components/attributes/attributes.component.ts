import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'arm-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {
  @Input()
  attributes: any;

  constructor() { }

  ngOnInit(): void {
  }

}
