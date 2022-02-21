import { CustomProperty } from './../../../../shared/model/vampire-dark-ages/CustomProperty';
import { Talents } from './../../../../shared/model/vampire-dark-ages/abilities/Talents';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'arm-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.scss']
})
export class TalentsComponent {
  @Input()
  talents: Talents;

  @Output()
  talentsChange = new EventEmitter<Talents>();

  propertyType: string;

  constructor() {
    this.propertyType = 'talento';
    this.talents = {} as Talents;
  }

  deleteCustomTalents(index: number): void {
    this.talents.customTalents.splice(index, 1);
  }

  trackByFn(index: number, item: CustomProperty): number {
    return index;
  }
}
