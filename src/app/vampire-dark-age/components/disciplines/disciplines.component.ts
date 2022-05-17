import { Component } from '@angular/core';
import { CustomPropertyManagement } from 'src/app/shared/components/CustomPropertyManagement';
import { CharacterSheetStoreService } from '../../services/character-sheet-store.service';
import { VampireDarkAgesSheetStoreService } from '../../../shared/services/vampire-dark-ages-sheet-store.service';

@Component({
  selector: 'arm-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.scss']
})
export class DisciplinesComponent extends CustomPropertyManagement {
  propertyType: string = 'discipline';
  customPropertyType: string = 'customDisciplines'
  propertiesMainPath: string = 'disciplines';

  constructor(characterSheetStoreService: CharacterSheetStoreService, vampireDASheetStoreService: VampireDarkAgesSheetStoreService) {
    super(characterSheetStoreService, vampireDASheetStoreService);
  }
}
