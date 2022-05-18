import { CustomPropertyManagement } from 'src/app/shared/components/CustomPropertyManagement';
import { Component } from '@angular/core';
import { VampireDarkAgesSheetStoreService } from 'src/app/shared/services/vampire-dark-ages-sheet-store.service';

@Component({
  selector: 'arm-flaws',
  templateUrl: './flaws.component.html',
  styleUrls: ['./flaws.component.scss']
})
export class FlawsComponent extends CustomPropertyManagement{
  propertyType: string = 'flaw';
  customPropertyType: string = 'flaws';
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

  updateCheckCustomProperty(event: boolean, index: number) {
    this.updateCheckboxValueFromCustomProperty(event, index, this.vampireDASheetStoreService.loadVampireDASheet);
  }
}
