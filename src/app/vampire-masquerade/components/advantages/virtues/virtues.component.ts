import { Component } from '@angular/core';
import { VtmPropertyManagement } from 'src/app/vampire-masquerade/shared-base/VtmPropertyManagement';
import { VampireMasqueradeSheetStoreService } from 'src/app/vampire-masquerade/services/vampire-masquerade-sheet-store.service';

@Component({
  selector: 'arm-virtues',
  templateUrl: './virtues.component.html',
  styleUrls: ['./virtues.component.scss']
})
export class VirtuesComponent extends VtmPropertyManagement {
  propertiesMainPath: string = 'advantages.virtues'

  constructor(vampireVTMSheetStoreService: VampireMasqueradeSheetStoreService) {
    super(vampireVTMSheetStoreService);
  }

  updateProperty(event: any, propertyName: string): void {
    this.updateValueFromProperty(event, propertyName, this.vampireVTMSheetStoreService.loadVampireVTMSheet);
  }
}
