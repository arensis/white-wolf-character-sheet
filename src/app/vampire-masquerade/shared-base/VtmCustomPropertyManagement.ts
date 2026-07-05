import { Component } from "@angular/core";
import { CustomProperty } from "src/app/shared/model/CustomProperty";
import { VtmPropertyManagement } from "./VtmPropertyManagement";
import * as _ from 'lodash';
import { VampireMasqueradeSheetStoreService } from "../services/vampire-masquerade-sheet-store.service";

@Component({
  template: '',
  selector: 'abstract-vtm-custom-property-management'
})
export abstract class VtmCustomPropertyManagement extends VtmPropertyManagement {
  abstract propertyType: string;
  abstract customPropertyType: string;
  valuePropertyName = 'value'
  checkBoxPropertyName = 'checkbox';

  constructor(vampireVTMSheetStoreService: VampireMasqueradeSheetStoreService) {
    super(vampireVTMSheetStoreService);
  }

  trackByFn(index: number, item: CustomProperty): number {
    return index;
  }

  dispatchSheet(): void {
    this.vampireVTMSheetStoreService.loadVampireVTMSheet(_.cloneDeep(this.characterSheet));
  }

  addItemToCustomProperties(name: string): void {
    const propertyPath = [this.propertiesMainPath, ...this.customPropertyType.split('.')].join('.');
    const sheet = _.cloneDeep(this.characterSheet);
    const arr = _.get(sheet, propertyPath) as any[];
    if (arr) {
      arr.push({ name, level: 0 });
    }
    this.vampireVTMSheetStoreService.loadVampireVTMSheet(sheet);
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
