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

  propertyType: string;

  constructor(dialogService: DialogService) {
    super(dialogService);
    this.propertyType = 'talento';
  }

  deleteCustomTalents(index: number): void {
    this.talents.customTalents.pop(index);
  }

  trackByFn(item: any, index: number): number {
    return index;
  }
}
