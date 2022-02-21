import { FileService } from './../shared/services/file.service';
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
  constructor(private characterSheetStoreService: CharacterSheetStoreService, private fileService: FileService) {}

  clearSheet(): void {
    console.log('player name in Main component', this.getCharacterSheet().playerData.info.name);
    this.characterSheetStoreService.clearCharacterSheet();
  }

  uploadSheet(event: any): void {
    const fileLoaded = this.fileService.mapFileToVampireDarkAgesSheet(event);
    if (fileLoaded) {
      console.log('File loaded new sheet: ', this.characterSheetStoreService.getCharacterSheet());
    } else {
      console.log('File not loaded');
    }
  }

  getCharacterSheet(): VampireDarkAgesSheet {
    return this.characterSheetStoreService.getCharacterSheet();
  }
}
