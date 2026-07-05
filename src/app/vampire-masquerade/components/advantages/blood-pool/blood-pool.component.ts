import { VtmPropertyManagement } from 'src/app/vampire-masquerade/shared-base/VtmPropertyManagement';
import { Component } from '@angular/core';
import { VampireMasqueradeSheetStoreService } from 'src/app/vampire-masquerade/services/vampire-masquerade-sheet-store.service';

@Component({
  selector: 'arm-blood-pool',
  templateUrl: './blood-pool.component.html',
  styleUrls: ['./blood-pool.component.scss']
})
export class BloodPoolComponent extends VtmPropertyManagement {
  propertiesMainPath: string = 'advantages.bloodPool'

  constructor(vampireVTMSheetStoreService: VampireMasqueradeSheetStoreService) {
    super(vampireVTMSheetStoreService);
  }

  updateProperty(event: any, propertyName: string): void {
    this.updateValueFromProperty(event, propertyName, this.vampireVTMSheetStoreService.loadVampireVTMSheet);
  }
}
