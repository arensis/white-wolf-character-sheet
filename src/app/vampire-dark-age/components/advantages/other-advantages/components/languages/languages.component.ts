import { CustomPropertyManagement } from 'src/app/shared/components/CustomPropertyManagement';
import { Component } from '@angular/core';
import { VampireDarkAgesSheetStoreService } from 'src/app/shared/services/vampire-dark-ages-sheet-store.service';

@Component({
  selector: 'arm-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent extends CustomPropertyManagement {
  propertyType: string = 'language';
  customPropertyType: string = 'languages';
  propertiesMainPath: string = 'advantages'

  constructor(vampireDASheetStoreService: VampireDarkAgesSheetStoreService) {
    super(vampireDASheetStoreService);
    this.valuePropertyName = 'level';
  }

  deleteEntireCustomProperty(index: number) {
    this.deleteCustomProperty(index, this.vampireDASheetStoreService.loadVampireDASheet);
  }

  updateCustomProperty(event: number, index: number) {
    this.updateValueFromCustomProperty(event, index, this.vampireDASheetStoreService.loadVampireDASheet);
  }
}
