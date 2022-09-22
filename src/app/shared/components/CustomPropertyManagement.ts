import { Component } from "@angular/core";
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

  constructor(vampireDASheetStoreService: VampireDarkAgesSheetStoreService) {
    super(vampireDASheetStoreService);
  }

  trackByFn(index: number, item: CustomProperty): number {
    return index;
  }

  deleteCustomProperty(index: number, dispatchCallback: (sheet: any) => void): void {
    const propertyPath = [this.propertiesMainPath, ...this.customPropertyType.split('.')].join('.');
    const customProperties = _.get(this.characterSheet, propertyPath) as CustomProperty[];
    customProperties.splice(index, 1);
    let characterSheet = _.cloneDeep(this.characterSheet);
    _.set(characterSheet, propertyPath, customProperties);

    dispatchCallback(characterSheet);
  }

  updateValueFromCustomProperty(value: number, index: number, dispatchCallback: (sheet: any) => void) {
    const propertyPath = [this.propertiesMainPath, ...this.customPropertyType.split('.')]
      .join('.')
      .concat(`[${index}]`)
      .concat(this.valuePropertyName);

    let characterSheet = _.cloneDeep(this.characterSheet);
    _.set(characterSheet, propertyPath, value);

    dispatchCallback(characterSheet);
  }

  updateCheckboxValueFromCustomProperty(value: boolean, index: number, dispatchCallback: (sheet: any) => void) {
    const propertyPath = [this.propertiesMainPath, ...this.customPropertyType.split('.')]
      .join('.')
      .concat(`[${index}]`)
      .concat(this.checkBoxPropertyName);
      let characterSheet = _.cloneDeep(this.characterSheet);
      _.set(characterSheet, propertyPath.concat(''), value);

    dispatchCallback(characterSheet);
  }
}
