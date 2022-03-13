import { Component } from '@angular/core';
import { CustomPropertyManagement } from 'src/app/shared/components/CustomPropertyManagement';
import { CharacterSheetStoreService } from 'src/app/vampire-dark-age/services/character-sheet-store.service';

@Component({
  selector: 'arm-thaumaturgy-roads',
  templateUrl: './thaumaturgy-roads.component.html',
  styleUrls: ['./thaumaturgy-roads.component.scss']
})
export class ThaumaturgyRoadsComponent extends CustomPropertyManagement {
  propertyType: string = 'path';
  customPropertyType: string = 'paths';
  propertiesMainPath: string = 'disciplines.thaumaturgy'

  constructor(characterSheetStoreService: CharacterSheetStoreService) {
    super(characterSheetStoreService);
    this.valuePropertyName = 'level';
    this.checkBoxPropertyName = 'inBlood';
  }
}
