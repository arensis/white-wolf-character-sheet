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
    this.fileService.mapFileToSheetObject(event,
      (sheetObject: VampireDarkAgesSheet) =>
        this.characterSheetStoreService.updateCharacterSheet(sheetObject));
  }

  getCharacterSheet(): VampireDarkAgesSheet {
    return this.characterSheetStoreService.getCharacterSheet();
  }

  toggleLockEdition(): void {
    const characterSheet = this.getCharacterSheet();
    console.log('isEditable in current character sheet', characterSheet.isEditable);
    const characterSheetUpdated = {
      ...characterSheet,
      ...{ isEditable: !characterSheet.isEditable}
     } as VampireDarkAgesSheet;
     console.log('isEditable in character sheet updated', characterSheetUpdated.isEditable);
    this.characterSheetStoreService.updateCharacterSheet(characterSheetUpdated);
    console.log('stored characterSheet, isEditable: ', this.getCharacterSheet().isEditable)
  }
}
