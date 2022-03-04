import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'arm-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input()
  characterSheet: any;

  constructor() { }

  ngOnInit() {
  }

}
