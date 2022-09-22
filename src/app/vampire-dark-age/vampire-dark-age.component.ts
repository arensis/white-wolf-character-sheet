import { EmptySheetService } from './../shared/services/empty-sheet.service';
import { VampireDarkAgesSheetBuilder } from './model/dark-ages-sheet/vampire-dark-ages/VampireDarkAgesSheetBuilder';
import { VampireDarkAgesSheetStoreService } from '../shared/services/vampire-dark-ages-sheet-store.service';
import { FileService } from './../shared/services/file.service';
import { Component, OnInit } from '@angular/core';
import { VampireDarkAgesSheet } from './model/dark-ages-sheet/vampire-dark-ages/VampireDarkAgesSheet';

@Component({
  selector: 'arm-vampire-dark-age',
  templateUrl: './vampire-dark-age.component.html',
  styleUrls: ['./vampire-dark-age.component.scss']
})
export class VampireDarkAgeComponent implements OnInit {
  characterSheet: VampireDarkAgesSheet = {} as VampireDarkAgesSheet;

  constructor(
    private emptySheetService: EmptySheetService,
    private sheetStoreService: VampireDarkAgesSheetStoreService,
    private fileService: FileService
  ) {}

  ngOnInit(): void {
    this.sheetStoreService.selectVampireDASheet().subscribe((sheet: VampireDarkAgesSheet) => {
      this.characterSheet = sheet;
    })
  }

  clearSheet(): void {
    this.sheetStoreService.loadVampireDASheet(new VampireDarkAgesSheetBuilder().build());
  }

  uploadSheet(event: any): void {
    this.fileService.mapFileToSheetObject(event, (sheetObject: VampireDarkAgesSheet) => {
        this.sheetStoreService.loadVampireDASheet(sheetObject);
      }
    );
  }

  toggleLockEdition(): void {
    const characterSheetUpdated = {
      ...this.characterSheet,
      ...{ isEditable: !this.characterSheet.isEditable}
     } as VampireDarkAgesSheet;

    this.sheetStoreService.loadVampireDASheet(characterSheetUpdated);
  }
}
