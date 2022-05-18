import { CustomPropertyManagement } from 'src/app/shared/components/CustomPropertyManagement';
import { Component } from '@angular/core';
import { VampireDarkAgesSheetStoreService } from 'src/app/shared/services/vampire-dark-ages-sheet-store.service';

@Component({
  selector: 'arm-backgrounds',
  templateUrl: './backgrounds.component.html',
  styleUrls: ['./backgrounds.component.scss']
})
export class BackgroundsComponent extends CustomPropertyManagement {
  propertyType: string = 'background';
  customPropertyType: string = 'customBackgrounds';
  propertiesMainPath: string = 'advantages.backgrounds'

  constructor(vampireDASheetStoreService: VampireDarkAgesSheetStoreService) {
    super(vampireDASheetStoreService);
    this.valuePropertyName = 'level';
  }

  updateProperty(event: any, propertyName: string): void {
    this.updateValueFromProperty(event, propertyName, this.vampireDASheetStoreService.loadVampireDASheet);
  }

  updateCustomProperty(event: number, index: number) {
    this.updateValueFromCustomProperty(event, index, this.vampireDASheetStoreService.loadVampireDASheet);
  }

  deleteEntireCustomProperty(index: number) {
    this.deleteCustomProperty(index, this.vampireDASheetStoreService.loadVampireDASheet);
  }
}
