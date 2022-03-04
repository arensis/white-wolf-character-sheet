import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'arm-road',
  templateUrl: './road.component.html',
  styleUrls: ['./road.component.scss']
})
export class RoadComponent implements OnInit {
  @Input()
  characterSheet: any;

  constructor() { }

  ngOnInit() {
  }

}
