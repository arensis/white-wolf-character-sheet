import { CustomProperty } from './../../../../shared/model/vampire-dark-ages/CustomProperty';
import { Talents } from './../../../../shared/model/vampire-dark-ages/abilities/Talents';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CharacterSheetStoreService } from 'src/app/vampire-dark-age/services/character-sheet-store.service';

@Component({
  selector: 'arm-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.scss']
})
export class TalentsComponent {
  @Input()
  characterSheet: any;

  propertyType: string = 'talent';
  talentsMainPath: string = 'abilities.talents';

  constructor(private characterSheetStoreService: CharacterSheetStoreService) {
    this.characterSheet = this.characterSheetStoreService.getCharacterSheet();
  }

  deleteCustomTalents(index: number): void {
    this.characterSheet.abilities.talents.customTalents.splice(index, 1);
  }

  trackByFn(index: number, item: CustomProperty): number {
    return index;
  }

  updateValueFromProperty(value: number, propertyName: string): void {
    const routesSegments = [this.talentsMainPath, propertyName].join('.').split('.');
    this.characterSheet[routesSegments[0]][routesSegments[1]][routesSegments[2]] = value;
    this.characterSheetStoreService.updateCharacterSheet(this.characterSheet);
  }

  updateValuerFromCustomProperty(value: number, index: number) {
    const routesSegments = [this.talentsMainPath, 'customTalents'].join('.').split('.');
    this.characterSheet[routesSegments[0]][routesSegments[1]][routesSegments[2]][index].level = value;
    this.characterSheetStoreService.updateCharacterSheet(this.characterSheet);
  }
}
