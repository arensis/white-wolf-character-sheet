import { CustomPropertyManagement } from 'src/app/shared/model/CustomPropertyManagement';
import { Component } from '@angular/core';
import { CharacterSheetStoreService } from 'src/app/vampire-dark-age/services/character-sheet-store.service';

@Component({
  selector: 'arm-flaws',
  templateUrl: './flaws.component.html',
  styleUrls: ['./flaws.component.scss']
})
export class FlawsComponent extends CustomPropertyManagement{
  propertyType: string = 'flaw';
  customPropertyType: string = 'flaws';
  propertiesMainPath: string = 'advantages'

  constructor(characterSheetStoreService: CharacterSheetStoreService) {
    super(characterSheetStoreService);
    this.valuePropertyName = 'level';
  }
}
