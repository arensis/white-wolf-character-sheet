import { Component } from '@angular/core';
import { CustomPropertyManagement } from 'src/app/shared/model/CustomPropertyManagement';
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

  constructor(characterSheetStoreService: CharacterSheetStoreService) {
    super(characterSheetStoreService)
  }
}
