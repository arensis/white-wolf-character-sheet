import { Component } from '@angular/core';
import { CustomPropertyManagement } from 'src/app/shared/components/CustomPropertyManagement';
import { VampireDarkAgesSheetStoreService } from 'src/app/shared/services/vampire-dark-ages-sheet-store.service';
import { CharacterSheetStoreService } from 'src/app/vampire-dark-age/services/character-sheet-store.service';

@Component({
  selector: 'arm-mortis-roads',
  templateUrl: './mortis-roads.component.html',
  styleUrls: ['./mortis-roads.component.scss']
})
export class MortisRoadsComponent extends CustomPropertyManagement {
  propertyType: string = 'path';
  customPropertyType: string = 'paths';
  propertiesMainPath: string = 'disciplines.mortis'

  constructor(characterSheetStoreService: CharacterSheetStoreService, vampireDASheetStoreService: VampireDarkAgesSheetStoreService) {
    super(characterSheetStoreService, vampireDASheetStoreService);
    this.valuePropertyName = 'level';
    this.checkBoxPropertyName = 'inBlood';
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
