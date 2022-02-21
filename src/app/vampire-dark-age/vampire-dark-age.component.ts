import { CharacterSheetStoreService } from './services/character-sheet-store.service';
import { DamageType } from './../shared/model/vampire-dark-ages/advantages/health/DamageType';
import { Component, OnChanges, OnInit } from '@angular/core';
import { VampireDarkAgesSheet } from '../shared/model/vampire-dark-ages/VampireDarkAgesSheet';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'arm-vampire-dark-age',
  templateUrl: './vampire-dark-age.component.html',
  styleUrls: ['./vampire-dark-age.component.scss']
})
export class VampireDarkAgeComponent {


  constructor(private characterSheetStoreService: CharacterSheetStoreService) {}

  clearSheet(): void {
    console.log('player name in Main component', this.getCharacterSheet().playerData.info.name);
    this.characterSheetStoreService.clearCharacterSheet();
  }

  uploadSheet(): void {

  }

  getCharacterSheet(): VampireDarkAgesSheet {
    return this.characterSheetStoreService.getCharacterSheet();
  }
}
