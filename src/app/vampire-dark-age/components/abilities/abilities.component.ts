import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'arm-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent implements OnInit {
  @Input()
  abilities: any;

  constructor() { }

  ngOnInit(): void {
  }
}
