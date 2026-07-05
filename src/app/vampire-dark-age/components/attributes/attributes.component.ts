import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { VampireDarkAgesSheetStoreService } from 'src/app/shared/services/vampire-dark-ages-sheet-store.service';

@Component({
  selector: 'arm-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {
  @Input()
  characterSheet: any;

  socialPath: string = 'attributes.social';
  mentalPath: string = 'attributes.mental';
  physicalPath: string = 'attributes.physical';

  constructor(private sheetStore: VampireDarkAgesSheetStoreService) {}

  ngOnInit(): void {
    this.sheetStore.selectVampireDASheet().subscribe(sheet => {
      this.characterSheet = sheet;
    })
  }

  updateSocialValueProperty(value: number, propertyName: string) {
    const completePath = [this.socialPath, propertyName].join('.');
    this.updateValueFromProperty(value, completePath);
  }

  updateMentalValueProperty(value: number, propertyName: string) {
    const completePath = [this.mentalPath, propertyName].join('.');
    this.updateValueFromProperty(value, completePath);
  }

  updatePhysicalValueProperty(value: number, propertyName: string) {
    const completePath = [this.physicalPath, propertyName].join('.');
    this.updateValueFromProperty(value, completePath);
  }

  private updateValueFromProperty(value: number, completePath: string): void {
    const routesSegments = completePath.split('.');
    let sheetClone = _.cloneDeep(this.characterSheet);
    _.set(sheetClone, completePath, value);
    // this.characterSheet[routesSegments[0]][routesSegments[1]][routesSegments[2]] = value;
    this.sheetStore.loadVampireDASheet(this.characterSheet);
  }
}

