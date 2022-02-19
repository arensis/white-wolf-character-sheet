import { Component, Input } from '@angular/core';

@Component({
  selector: 'arm-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @Input()
  skills: any;

  propertyType: string;

  constructor() {
    this.propertyType = 'técnica'
   }

  deleteCustomSkill(index: number): void {
    this.skills.customSkills.splice(index, 1);
  }

  trackByFn(item: any, index: number): number {
    return index;
  }
}
