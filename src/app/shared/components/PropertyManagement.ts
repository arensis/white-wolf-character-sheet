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

  constructor(
    // protected characterSheetStoreService: CharacterSheetStoreService,
    protected vampireDASheetStoreService: VampireDarkAgesSheetStoreService
  ) {
    // this.characterSheet = this.characterSheetStoreService.getCharacterSheet();
  }

  ngOnInit(): void {
    this.vampireDASheetStoreService.selectVampireDASheet().subscribe((sheet: VampireDarkAgesSheet) => {
      this.characterSheet = sheet;
    })
  }

  updateValueFromProperty(value: any, propertyName: string, dispatchCallback: (sheet: any) => void): void {
    const propertyPath = [this.propertiesMainPath, ...propertyName.split('.')].join('.');
    _.set(this.characterSheet, propertyPath, value);

    dispatchCallback(this.characterSheet);
    // this.characterSheetStoreService.updateCharacterSheet(this.characterSheet);
  }

  updatedCheckboxValueFromProperty(value: boolean, propertyName: string, dispatchCallback: (sheet: any) => void): void {
    const propertyPath = [this.propertiesMainPath, ...propertyName.split('.')].join('.');
    _.set(this.characterSheet, propertyPath, value);

    dispatchCallback(this.characterSheet);
    // this.characterSheetStoreService.updateCharacterSheet(this.characterSheet);
  }
}
