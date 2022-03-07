import { CustomPropertyManagement } from 'src/app/shared/model/CustomPropertyManagement';
import { Component } from '@angular/core';
import { CharacterSheetStoreService } from 'src/app/vampire-dark-age/services/character-sheet-store.service';

@Component({
  selector: 'arm-backgrounds',
  templateUrl: './backgrounds.component.html',
  styleUrls: ['./backgrounds.component.scss']
})
export class BackgroundsComponent extends CustomPropertyManagement {
  propertyType: string = 'background';
  customPropertyType: string = 'customBackgrounds';
  propertiesMainPath: string = 'advantages.backgrounds'

  constructor(characterSheetStoreService: CharacterSheetStoreService) {
    super(characterSheetStoreService);
    this.valuePropertyName = 'level';
  }
}
