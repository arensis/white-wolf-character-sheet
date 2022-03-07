import { Component } from '@angular/core';
import { CustomPropertyManagement } from 'src/app/shared/model/CustomPropertyManagement';
import { CharacterSheetStoreService } from 'src/app/vampire-dark-age/services/character-sheet-store.service';

@Component({
  selector: 'arm-mortis-rituals',
  templateUrl: './mortis-rituals.component.html',
  styleUrls: ['./mortis-rituals.component.scss']
})
export class MortisRitualsComponent extends CustomPropertyManagement {
  propertyType: string = 'ritual';
  customPropertyType: string = 'rituals';
  propertiesMainPath: string = 'disciplines.mortis'

  constructor(characterSheetStoreService: CharacterSheetStoreService) {
    super(characterSheetStoreService)
  }
}
