import { Component, Input } from '@angular/core';
import { CustomProperties } from 'src/app/shared/components/CustomProperties';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'arm-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.scss']
})
export class TalentsComponent extends CustomProperties {
  @Input()
  talents: any;

  constructor(dialogService: DialogService) {
    super(dialogService);
    this.propertyName = 'Nuevo conocimiento';
  }

  addCustomTalent() {
    this.addCustomProperty((name) =>
      this.talents.customTalents.push({ name: name, level: 0 }));
  }

  trackByFn(item: any, index: number): number {
    return index;
  }
}
