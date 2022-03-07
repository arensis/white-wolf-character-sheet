import { Component } from "@angular/core";
import { CharacterSheetStoreService } from "src/app/vampire-dark-age/services/character-sheet-store.service";
import { CustomProperty } from "./CustomProperty";
import { PropertyManagement } from "./PropertyManagement";
import * as _ from 'lodash';
import { values } from "lodash";

@Component({
  template: '',
  selector: 'abstract-custom-property-management'
})
export abstract class CustomPropertyManagement extends PropertyManagement {
  abstract propertyType: string;
  abstract customPropertyType: string;
  valuePropertyName = 'value'
  checkBoxPropertyName = 'checkbox';

  constructor(characterSheetStoreService: CharacterSheetStoreService) {
    super(characterSheetStoreService);
  }

  trackByFn(index: number, item: CustomProperty): number {
    return index;
  }

  deleteCustomProperty(index: number): void {
    const propertyPath = [this.propertiesMainPath, ...this.customPropertyType.split('.')].join('.');
    const customProperties = _.get(this.characterSheet, propertyPath) as CustomProperty[];
    customProperties.splice(index, 1);
    _.set(this.characterSheet, propertyPath, customProperties)
    this.characterSheetStoreService.updateCharacterSheet(this.characterSheet);
  }

  updateValueFromCustomProperty(value: number, index: number) {
    const propertyPath = [this.propertiesMainPath, ...this.customPropertyType.split('.')]
      .join('.')
      .concat(`[${index}]`)
      .concat(this.valuePropertyName);
    _.set(this.characterSheet, propertyPath, value);
    this.characterSheetStoreService.updateCharacterSheet(this.characterSheet);
  }

  updateCheckboxValueFromCustomProperty(value: boolean, index: number) {
    const propertyPath = [this.propertiesMainPath, ...this.customPropertyType.split('.')]
      .join('.')
      .concat(`[${index}]`)
      .concat(this.checkBoxPropertyName);
    _.set(this.characterSheet, propertyPath.concat(''), value);
    this.characterSheetStoreService.updateCharacterSheet(this.characterSheet);
  }
}
