import { Component } from '@angular/core';
import { CustomPropertyManagement } from 'src/app/shared/components/CustomPropertyManagement';
import { CharacterSheetStoreService } from 'src/app/vampire-dark-age/services/character-sheet-store.service';

@Component({
  selector: 'arm-thaumaturgy-rituals',
  templateUrl: './thaumaturgy-rituals.component.html',
  styleUrls: ['./thaumaturgy-rituals.component.scss']
})
export class ThaumaturgyRitualsComponent extends CustomPropertyManagement{
  propertyType: string = 'ritual';
  customPropertyType: string = 'rituals';
  propertiesMainPath: string = 'disciplines.thaumaturgy'

  constructor(characterSheetStoreService: CharacterSheetStoreService) {
    super(characterSheetStoreService);
    this.valuePropertyName = 'level';
  }
}
