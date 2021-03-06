import { Component, Input } from '@angular/core';
import { CustomPropertyManagement } from 'src/app/shared/model/CustomPropertyManagement';
import { VampireDarkAgesSheet } from '../../model/vampire-dark-ages/VampireDarkAgesSheet';
import { CharacterSheetStoreService } from '../../services/character-sheet-store.service';

@Component({
  selector: 'arm-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.scss']
})
export class DisciplinesComponent extends CustomPropertyManagement {
  propertyType: string = 'discipline';
  customPropertyType: string = 'customDisciplines'
  propertiesMainPath: string = 'disciplines';

  constructor(characterSheetStoreService: CharacterSheetStoreService) {
    super(characterSheetStoreService);
  }
}
