import { CustomPropertyManagement } from 'src/app/shared/model/CustomPropertyManagement';
import { Component } from '@angular/core';
import { CharacterSheetStoreService } from 'src/app/vampire-dark-age/services/character-sheet-store.service';

@Component({
  selector: 'arm-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.scss']
})
export class TalentsComponent extends CustomPropertyManagement {
  propertyType: string = 'talent';
  customPropertyType: string = 'customTalents';
  propertiesMainPath: string = 'abilities.talents';


  constructor(characterSheetStoreService: CharacterSheetStoreService) {
    super(characterSheetStoreService);
  }
}
