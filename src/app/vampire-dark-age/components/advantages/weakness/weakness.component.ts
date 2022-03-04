import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'arm-weakness',
  templateUrl: './weakness.component.html',
  styleUrls: ['./weakness.component.scss']
})
export class WeaknessComponent implements OnInit {
  @Input()
  characterSheet: any;

  constructor() { }

  ngOnInit() {
  }

}
