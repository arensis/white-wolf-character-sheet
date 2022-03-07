import { CustomPropertyManagement } from 'src/app/shared/model/CustomPropertyManagement';
import { Component } from '@angular/core';
import { CharacterSheetStoreService } from 'src/app/vampire-dark-age/services/character-sheet-store.service';

@Component({
  selector: 'arm-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent extends CustomPropertyManagement {
  propertyType: string = 'skill';
  customPropertyType: string = 'customSkills';
  propertiesMainPath: string = 'abilities.skills';

  constructor(characterSheetStoreService: CharacterSheetStoreService) {
    super(characterSheetStoreService);
    this.valuePropertyName = 'level';
  }
}
