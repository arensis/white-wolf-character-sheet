import { FileService } from './../shared/services/file.service';
import { CharacterSheetStoreService } from './services/character-sheet-store.service';
import { Component } from '@angular/core';
import { VampireDarkAgesSheet } from '../shared/model/vampire-dark-ages/VampireDarkAgesSheet';

@Component({
  selector: 'arm-vampire-dark-age',
  templateUrl: './vampire-dark-age.component.html',
  styleUrls: ['./vampire-dark-age.component.scss']
})
export class VampireDarkAgeComponent {
  constructor(private characterSheetStoreService: CharacterSheetStoreService, private fileService: FileService) {}

  clearSheet(): void {
    this.characterSheetStoreService.clearCharacterSheet();
  }

  uploadSheet(event: any): void {
    this.fileService.mapFileToVampireDarkAgesSheet(event);
  }

  getCharacterSheet(): VampireDarkAgesSheet {
    return this.characterSheetStoreService.getCharacterSheet();
  }
}
