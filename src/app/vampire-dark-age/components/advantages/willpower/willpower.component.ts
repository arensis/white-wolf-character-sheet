import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'arm-willpower',
  templateUrl: './willpower.component.html',
  styleUrls: ['./willpower.component.scss']
})
export class WillpowerComponent implements OnInit {
  @Input()
  characterSheet: any;

  constructor() { }

  ngOnInit() {
  }

}
