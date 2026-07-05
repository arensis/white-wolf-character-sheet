import { VampireDarkAgesSheetStoreService } from '../services/vampire-dark-ages-sheet-store.service';
import { Component, Input, OnInit } from "@angular/core";
import * as _ from 'lodash';
import { VampireDarkAgesSheet } from "src/app/vampire-dark-age/model/dark-ages-sheet/vampire-dark-ages/VampireDarkAgesSheet";

@Component({
  template: '',
  selector: 'abstract-property-management'
})
export abstract class PropertyManagement implements OnInit {
  @Input()
  characterSheet: VampireDarkAgesSheet = {} as VampireDarkAgesSheet;

  abstract propertiesMainPath: string;

  constructor(protected vampireDASheetStoreService: VampireDarkAgesSheetStoreService) {}

  ngOnInit(): void {
    this.vampireDASheetStoreService.selectVampireDASheet().subscribe((sheet: VampireDarkAgesSheet) => {
      this.characterSheet = sheet;
    })
  }

  updateValueFromProperty(value: any, propertyName: string, dispatchCallback: (sheet: any) => void): void {
    const propertyPath = [this.propertiesMainPath, ...propertyName.split('.')].join('.');
    console.log(propertyPath);
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
