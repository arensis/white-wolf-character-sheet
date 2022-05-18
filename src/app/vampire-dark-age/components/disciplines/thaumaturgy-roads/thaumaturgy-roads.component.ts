import { Component } from '@angular/core';
import { CustomPropertyManagement } from 'src/app/shared/components/CustomPropertyManagement';
import { VampireDarkAgesSheetStoreService } from 'src/app/shared/services/vampire-dark-ages-sheet-store.service';

@Component({
  selector: 'arm-thaumaturgy-roads',
  templateUrl: './thaumaturgy-roads.component.html',
  styleUrls: ['./thaumaturgy-roads.component.scss']
})
export class ThaumaturgyRoadsComponent extends CustomPropertyManagement {
  propertyType: string = 'path';
  customPropertyType: string = 'paths';
  propertiesMainPath: string = 'disciplines.thaumaturgy'

  constructor(vampireDASheetStoreService: VampireDarkAgesSheetStoreService) {
    super(vampireDASheetStoreService);
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
