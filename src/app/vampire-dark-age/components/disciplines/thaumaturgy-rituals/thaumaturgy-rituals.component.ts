import { Component } from '@angular/core';
import { CustomPropertyManagement } from 'src/app/shared/components/CustomPropertyManagement';
import { VampireDarkAgesSheetStoreService } from 'src/app/shared/services/vampire-dark-ages-sheet-store.service';
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

  constructor(characterSheetStoreService: CharacterSheetStoreService, vampireDASheetStoreService: VampireDarkAgesSheetStoreService) {
    super(characterSheetStoreService, vampireDASheetStoreService);
    this.valuePropertyName = 'level';
  }

  deleteEntireCustomProperty(index: number) {
    this.deleteCustomProperty(index, this.vampireDASheetStoreService.loadVampireDASheet);
  }

  updateCustomProperty(event: number, index: number) {
    this.updateValueFromCustomProperty(event, index, this.vampireDASheetStoreService.loadVampireDASheet);
  }
}
