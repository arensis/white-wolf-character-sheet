import { Component } from "@angular/core";
import { CharacterSheetStoreService } from "src/app/vampire-dark-age/services/character-sheet-store.service";
import { CustomProperty } from "../model/CustomProperty";
import { PropertyManagement } from "./PropertyManagement";
import * as _ from 'lodash';
import { VampireDarkAgesSheetStoreService } from "src/app/shared/services/vampire-dark-ages-sheet-store.service";

@Component({
  template: '',
  selector: 'abstract-custom-property-management'
})
export abstract class CustomPropertyManagement extends PropertyManagement {
  abstract propertyType: string;
  abstract customPropertyType: string;
  valuePropertyName = 'value'
  checkBoxPropertyName = 'checkbox';

  constructor(characterSheetStoreService: CharacterSheetStoreService, vampireDASheetStoreService: VampireDarkAgesSheetStoreService) {
    super(characterSheetStoreService, vampireDASheetStoreService);
  }

  trackByFn(index: number, item: CustomProperty): number {
    return index;
  }

  deleteCustomProperty(index: number, dispatchCallback: (sheet: any) => void): void {
    const propertyPath = [this.propertiesMainPath, ...this.customPropertyType.split('.')].join('.');
    const customProperties = _.get(this.characterSheet, propertyPath) as CustomProperty[];
    customProperties.splice(index, 1);
    _.set(this.characterSheet, propertyPath, customProperties);
    dispatchCallback(this.characterSheet);
    // this.characterSheetStoreService.updateCharacterSheet(this.characterSheet);
  }

  updateValueFromCustomProperty(value: number, index: number, dispatchCallback: (sheet: any) => void) {
    const propertyPath = [this.propertiesMainPath, ...this.customPropertyType.split('.')]
      .join('.')
      .concat(`[${index}]`)
      .concat(this.valuePropertyName);

    _.set(this.characterSheet, propertyPath, value);
    dispatchCallback(this.characterSheet);
    // this.characterSheetStoreService.updateCharacterSheet(this.characterSheet);
  }

  updateCheckboxValueFromCustomProperty(value: boolean, index: number, dispatchCallback: (sheet: any) => void) {
    const propertyPath = [this.propertiesMainPath, ...this.customPropertyType.split('.')]
      .join('.')
      .concat(`[${index}]`)
      .concat(this.checkBoxPropertyName);

      _.set(this.characterSheet, propertyPath.concat(''), value);
    dispatchCallback(this.characterSheet);
    // this.characterSheetStoreService.updateCharacterSheet(this.characterSheet);
  }
}
