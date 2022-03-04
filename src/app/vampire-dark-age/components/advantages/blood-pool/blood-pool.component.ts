import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'arm-blood-pool',
  templateUrl: './blood-pool.component.html',
  styleUrls: ['./blood-pool.component.scss']
})
export class BloodPoolComponent implements OnInit {
  @Input()
  characterSheet: any;

  constructor() { }

  ngOnInit() {
  }

}
