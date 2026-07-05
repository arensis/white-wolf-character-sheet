import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { VampireMasqueradeSheetStoreService } from 'src/app/vampire-masquerade/services/vampire-masquerade-sheet-store.service';
import { SpecialtyService } from 'src/app/vampire-masquerade/creation/services/specialty.service';
import { AttributeService } from 'src/app/vampire-masquerade/creation/services/attribute.service';

@Component({
  selector: 'arm-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {
  @Input()
  characterSheet: any;

  physicalMembers = ['strength', 'dexterity', 'stamina'];
  socialMembers = ['charisma', 'manipulation', 'appearance'];
  mentalMembers = ['perception', 'intelligence', 'wits'];

  socialPath: string = 'attributes.social';
  mentalPath: string = 'attributes.mental';
  physicalPath: string = 'attributes.physical';

  constructor(
    private sheetStore: VampireMasqueradeSheetStoreService,
    public specialty: SpecialtyService,
    public attribute: AttributeService
  ) {}

  ngOnInit(): void {
    this.sheetStore.selectVampireVTMSheet().subscribe(sheet => {
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
    this.sheetStore.loadVampireVTMSheet(this.characterSheet);
  }
}

