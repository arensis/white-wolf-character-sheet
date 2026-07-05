import { VtmPropertyManagement } from 'src/app/vampire-masquerade/shared-base/VtmPropertyManagement';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { VampireMasqueradeSheetStoreService } from 'src/app/vampire-masquerade/services/vampire-masquerade-sheet-store.service';

@Component({
  selector: 'arm-willpower',
  templateUrl: './willpower.component.html',
  styleUrls: ['./willpower.component.scss']
})
export class WillpowerComponent extends VtmPropertyManagement {
  propertiesMainPath: string = 'advantages.willpower';

  constructor(vampireVTMSheetStoreService: VampireMasqueradeSheetStoreService) {
    super(vampireVTMSheetStoreService)
  }

  updateProperty(event: any, propertyName: string): void {
    this.updateValueFromProperty(event, propertyName, this.vampireVTMSheetStoreService.loadVampireVTMSheet);
  }
}
