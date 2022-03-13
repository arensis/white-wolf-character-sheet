
import { Component } from '@angular/core';
import { CharacterSheetStoreService } from 'src/app/vampire-dark-age/services/character-sheet-store.service';
import { CustomPropertyManagement } from 'src/app/shared/components/CustomPropertyManagement';

@Component({
  selector: 'arm-knowledges',
  templateUrl: './knowledges.component.html',
  styleUrls: ['./knowledges.component.scss']
})
export class KnowledgesComponent extends CustomPropertyManagement{
  propertyType: string = 'knowledge';
  customPropertyType: string = 'customKnowledges'
  propertiesMainPath: string = 'abilities.knowledges';


  constructor(characterSheetStoreService: CharacterSheetStoreService) {
    super(characterSheetStoreService);
    this.valuePropertyName = 'level'
  }
}
