import { Component, Input } from "@angular/core";
import { VampireDarkAgesSheet } from "src/app/vampire-dark-age/model/vampire-dark-ages/VampireDarkAgesSheet";
import { CharacterSheetStoreService } from "src/app/vampire-dark-age/services/character-sheet-store.service";
import * as _ from 'lodash';

@Component({
  template: '',
  selector: 'abstract-property-management'
})
export abstract class PropertyManagement {
  @Input()
  characterSheet: VampireDarkAgesSheet;

  abstract propertiesMainPath: string;

  constructor(protected characterSheetStoreService: CharacterSheetStoreService) {
    this.characterSheet = this.characterSheetStoreService.getCharacterSheet();
  }

  updateValueFromProperty(value: number, propertyName: string): void {
    const propertyPath = [this.propertiesMainPath, propertyName].join('.');
    _.set(this.characterSheet, propertyPath, value);
    this.characterSheetStoreService.updateCharacterSheet(this.characterSheet);
  }
}
