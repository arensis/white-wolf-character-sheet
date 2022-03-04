import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'arm-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {
  @Input()
  characterSheet: any;

  constructor() { }

  ngOnInit() {
  }

}
