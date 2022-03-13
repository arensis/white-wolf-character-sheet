import { VampireDarkAgesSheet } from 'src/app/vampire-dark-age/model/dark-ages-sheet/vampire-dark-ages/VampireDarkAgesSheet';
import { Attributes } from '../../model/dark-ages-sheet/vampire-dark-ages/attributes/VampireDAAttributes';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharacterSheetStoreService } from '../../services/character-sheet-store.service';

@Component({
  selector: 'arm-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent {
  @Input()
  characterSheet: any;

  socialPath: string = 'attributes.social';
  mentalPath: string = 'attributes.mental';
  physicalPath: string = 'attributes.physical';

  constructor(private characterSheetStoreService: CharacterSheetStoreService) {
    this.characterSheet = this.characterSheetStoreService.getCharacterSheet();
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
    this.characterSheet[routesSegments[0]][routesSegments[1]][routesSegments[2]] = value;
    this.characterSheetStoreService.updateCharacterSheet(this.characterSheet);
  }
}

