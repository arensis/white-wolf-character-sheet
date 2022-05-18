import { CustomPropertyManagement } from 'src/app/shared/components/CustomPropertyManagement';
import { Component } from '@angular/core';
import { VampireDarkAgesSheetStoreService } from 'src/app/shared/services/vampire-dark-ages-sheet-store.service';

@Component({
  selector: 'arm-merits',
  templateUrl: './merits.component.html',
  styleUrls: ['./merits.component.scss']
})
export class MeritsComponent extends CustomPropertyManagement {
  propertyType: string = 'merit';
  customPropertyType: string = 'merits';
  propertiesMainPath: string = 'advantages'

  constructor(vampireDASheetStoreService: VampireDarkAgesSheetStoreService) {
    super(vampireDASheetStoreService);
    this.valuePropertyName = 'level';
  }

  deleteEntireCustomProperty(index: number) {
    this.deleteCustomProperty(index, this.vampireDASheetStoreService.loadVampireDASheet);
  }

  updateCustomProperty(event: number, index: number) {
    this.updateValueFromCustomProperty(event, index, this.vampireDASheetStoreService.loadVampireDASheet);
  }
}
