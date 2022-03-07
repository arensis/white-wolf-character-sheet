import { CustomPropertyManagement } from 'src/app/shared/model/CustomPropertyManagement';
import { Component } from '@angular/core';
import { CharacterSheetStoreService } from 'src/app/vampire-dark-age/services/character-sheet-store.service';

@Component({
  selector: 'arm-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent extends CustomPropertyManagement {
  propertyType: string = 'language';
  customPropertyType: string = 'languages';
  propertiesMainPath: string = 'advantages'

  constructor(characterSheetStoreService: CharacterSheetStoreService) {
    super(characterSheetStoreService);
    this.valuePropertyName = 'level';
  }
}
