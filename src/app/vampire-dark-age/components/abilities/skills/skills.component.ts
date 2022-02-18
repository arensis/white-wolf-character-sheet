import { DialogService } from './../../../../shared/services/dialog.service';
import { Component, Input } from '@angular/core';
import { CustomProperties } from 'src/app/shared/components/CustomProperties';

@Component({
  selector: 'arm-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent extends CustomProperties {
  @Input()
  skills: any;

  constructor(dialogService: DialogService) {
    super(dialogService);
    this.propertyName = 'Nueva técnica'
   }

  addCustomSkill(): void {
    this.addCustomProperty((name) =>
      this.skills.customTalents.push({ name: name, level: 0 }));
  }

  trackByFn(item: any, index: number): number {
    return index;
  }
}
