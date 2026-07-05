import { VampireMasqueradeSheetStoreService } from '../services/vampire-masquerade-sheet-store.service';
import { Component, Input, OnInit } from "@angular/core";
import * as _ from 'lodash';
import { VampireMasqueradeSheet } from "src/app/vampire-masquerade/model/masquerade-sheet/vampire-masquerade/VampireMasqueradeSheet";

@Component({
  template: '',
  selector: 'abstract-vtm-property-management'
})
export abstract class VtmPropertyManagement implements OnInit {
  @Input()
  characterSheet: VampireMasqueradeSheet = {} as VampireMasqueradeSheet;

  abstract propertiesMainPath: string;

  constructor(protected vampireVTMSheetStoreService: VampireMasqueradeSheetStoreService) {}

  ngOnInit(): void {
    this.vampireVTMSheetStoreService.selectVampireVTMSheet().subscribe((sheet: VampireMasqueradeSheet) => {
      this.characterSheet = sheet;
    })
  }

  updateValueFromProperty(value: any, propertyName: string, dispatchCallback: (sheet: any) => void): void {
    const propertyPath = [this.propertiesMainPath, ...propertyName.split('.')].join('.');
    let characterSheet = _.cloneDeep(this.characterSheet);
    _.set(characterSheet, propertyPath, value);

    dispatchCallback(characterSheet);
  }

  updatedCheckboxValueFromProperty(value: boolean, propertyName: string, dispatchCallback: (sheet: any) => void): void {
    const propertyPath = [this.propertiesMainPath, ...propertyName.split('.')].join('.');
    let characterSheet = _.cloneDeep(this.characterSheet);
    _.set(characterSheet, propertyPath, value);

    dispatchCallback(characterSheet);
  }
}
