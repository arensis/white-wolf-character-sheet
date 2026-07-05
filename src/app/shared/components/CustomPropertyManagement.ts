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

  dispatchSheet(): void {
    this.vampireDASheetStoreService.loadVampireDASheet(_.cloneDeep(this.characterSheet));
  }

  addItemToCustomProperties(name: string): void {
    const propertyPath = [this.propertiesMainPath, ...this.customPropertyType.split('.')].join('.');
    const sheet = _.cloneDeep(this.characterSheet);
    const arr = _.get(sheet, propertyPath) as any[];
    if (arr) {
      arr.push({ name, level: 0 });
    }
    this.vampireDASheetStoreService.loadVampireDASheet(sheet);
  }

  deleteCustomProperty(index: number, dispatchCallback: (sheet: any) => void): void {
    const propertyPath = [this.propertiesMainPath, ...this.customPropertyType.split('.')].join('.');
    let characterSheet = _.cloneDeep(this.characterSheet);
    const customProperties = _.get(characterSheet, propertyPath) as CustomProperty[];
    customProperties.splice(index, 1);
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
