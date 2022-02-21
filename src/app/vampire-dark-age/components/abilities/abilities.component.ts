import { Abilities } from './../../../shared/model/vampire-dark-ages/abilities/Abilities';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'arm-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent {
  @Input()
  abilities: Abilities;

  @Output()
  abilitiesChange = new EventEmitter<Abilities>();

  constructor() {
    this.abilities = {} as Abilities;
  }
}
