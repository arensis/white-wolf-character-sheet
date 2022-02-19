import { DialogService } from './../../../../shared/services/dialog.service';
import { Component, Input } from '@angular/core';
import { CustomProperties } from 'src/app/shared/components/CustomProperties';

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
    this.skills.customSkills.pop(index);
  }

  trackByFn(item: any, index: number): number {
    return index;
  }
}
