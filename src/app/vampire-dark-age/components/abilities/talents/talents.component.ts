import { Component, Input } from '@angular/core';

@Component({
  selector: 'arm-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.scss']
})
export class TalentsComponent {
  @Input()
  talents: any;

  propertyType: string;

  constructor() {
    this.propertyType = 'talento';
  }

  deleteCustomTalents(index: number): void {
    this.talents.customTalents.splice(index, 1);
  }

  trackByFn(item: any, index: number): number {
    return index;
  }
}
