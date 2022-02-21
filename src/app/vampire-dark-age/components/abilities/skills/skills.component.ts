import { Skills } from './../../../../shared/model/vampire-dark-ages/abilities/Skills';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CustomProperty } from 'src/app/shared/model/vampire-dark-ages/CustomProperty';

@Component({
  selector: 'arm-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @Input()
  skills: Skills;

  @Output()
  skillsChange = new EventEmitter<Skills>();

  propertyType: string;

  constructor() {
    this.propertyType = 'técnica'
    this.skills = {} as Skills;
   }

  deleteCustomSkill(index: number): void {
    this.skills.customSkills.splice(index, 1);
  }

  trackByFn(index: number, item: CustomProperty): number {
    return index;
  }
}
