import { VtmCustomPropertyManagement } from 'src/app/vampire-masquerade/shared-base/VtmCustomPropertyManagement';
import { Component } from '@angular/core';
import { VampireMasqueradeSheetStoreService } from 'src/app/vampire-masquerade/services/vampire-masquerade-sheet-store.service';
import { BackgroundService } from 'src/app/vampire-masquerade/creation/services/background.service';

@Component({
  selector: 'arm-backgrounds',
  templateUrl: './backgrounds.component.html',
  styleUrls: ['./backgrounds.component.scss']
})
export class BackgroundsComponent extends VtmCustomPropertyManagement {
  propertyType: string = 'background';
  customPropertyType: string = 'customBackgrounds';
  propertiesMainPath: string = 'advantages.backgrounds'

  constructor(
    vampireVTMSheetStoreService: VampireMasqueradeSheetStoreService,
    public background: BackgroundService,
  ) {
    super(vampireVTMSheetStoreService);
    this.valuePropertyName = 'level';
  }

  updateProperty(event: any, propertyName: string): void {
    this.updateValueFromProperty(event, propertyName, this.vampireVTMSheetStoreService.loadVampireVTMSheet);
  }

  updateCustomProperty(event: number, index: number) {
    this.updateValueFromCustomProperty(event, index, this.vampireVTMSheetStoreService.loadVampireVTMSheet);
  }

  deleteEntireCustomProperty(index: number) {
    this.deleteCustomProperty(index, this.vampireVTMSheetStoreService.loadVampireVTMSheet);
  }
}
