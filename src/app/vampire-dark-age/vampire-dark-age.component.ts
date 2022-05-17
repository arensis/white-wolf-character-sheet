import { VampireDarkAgesSheetStoreService } from '../shared/services/vampire-dark-ages-sheet-store.service';
import { FileService } from './../shared/services/file.service';
import { CharacterSheetStoreService } from './services/character-sheet-store.service';
import { Component, OnInit } from '@angular/core';
import { VampireDarkAgesSheet } from './model/dark-ages-sheet/vampire-dark-ages/VampireDarkAgesSheet';

@Component({
  selector: 'arm-vampire-dark-age',
  templateUrl: './vampire-dark-age.component.html',
  styleUrls: ['./vampire-dark-age.component.scss']
})
export class VampireDarkAgeComponent implements OnInit {
  characterSheet: VampireDarkAgesSheet;

  constructor(
    private characterSheetStoreService: CharacterSheetStoreService,
    private sheetStoreService: VampireDarkAgesSheetStoreService,
    private fileService: FileService
  ) {
    this.characterSheet = this.characterSheetStoreService.buildEmptyCharacterSheet();
  }

  ngOnInit(): void {
    this.sheetStoreService.selectVampireDASheet().subscribe((sheet: VampireDarkAgesSheet) => {
      this.characterSheet = sheet;
    })
  }

  clearSheet(): void {
    this.sheetStoreService.loadVampireDASheet(this.characterSheetStoreService.clearCharacterSheet());
    // this.characterSheetStoreService.clearCharacterSheet();
  }

  uploadSheet(event: any): void {
    this.fileService.mapFileToSheetObject(event, (sheetObject: VampireDarkAgesSheet) => {
        this.sheetStoreService.loadVampireDASheet(sheetObject);
        // this.characterSheetStoreService.updateCharacterSheet(sheetObject);
      }
    );
  }

  toggleLockEdition(): void {
    const characterSheetUpdated = {
      ...this.characterSheet,
      ...{ isEditable: !this.characterSheet.isEditable}
     } as VampireDarkAgesSheet;

    this.sheetStoreService.loadVampireDASheet(characterSheetUpdated);
    // this.characterSheetStoreService.updateCharacterSheet(characterSheetUpdated);
  }
}
