import { CustomPropertyManagement } from 'src/app/shared/model/CustomPropertyManagement';
import { Component } from '@angular/core';
import { CharacterSheetStoreService } from 'src/app/vampire-dark-age/services/character-sheet-store.service';

@Component({
  selector: 'arm-merits',
  templateUrl: './merits.component.html',
  styleUrls: ['./merits.component.scss']
})
export class MeritsComponent extends CustomPropertyManagement {
  propertyType: string = 'merit';
  customPropertyType: string = 'merits';
  propertiesMainPath: string = 'advantages'

  constructor(characterSheetStoreService: CharacterSheetStoreService) {
    super(characterSheetStoreService)
  }
}
