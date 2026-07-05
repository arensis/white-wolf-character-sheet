import { VampireMasqueradeSheetBuilder } from './model/masquerade-sheet/vampire-masquerade/VampireMasqueradeSheetBuilder';
import { VampireMasqueradeSheetStoreService } from 'src/app/vampire-masquerade/services/vampire-masquerade-sheet-store.service';
import { FileService } from './../shared/services/file.service';
import { Component, OnInit } from '@angular/core';
import { VampireMasqueradeSheet } from './model/masquerade-sheet/vampire-masquerade/VampireMasqueradeSheet';

@Component({
  selector: 'arm-vampire-masquerade',
  templateUrl: './vampire-masquerade.component.html',
  styleUrls: ['./vampire-masquerade.component.scss']
})
export class VampireMasqueradeComponent implements OnInit {
  characterSheet: VampireMasqueradeSheet = {} as VampireMasqueradeSheet;

  constructor(
    private sheetStoreService: VampireMasqueradeSheetStoreService,
    private fileService: FileService
  ) {}

  ngOnInit(): void {
    this.sheetStoreService.selectVampireVTMSheet().subscribe((sheet: VampireMasqueradeSheet) => {
      this.characterSheet = sheet;
    })
  }

  clearSheet(): void {
    this.sheetStoreService.loadVampireVTMSheet(new VampireMasqueradeSheetBuilder().build());
  }

  uploadSheet(event: any): void {
    this.fileService.mapFileToSheetObject(event, (sheetObject: VampireMasqueradeSheet) => {
        this.sheetStoreService.loadVampireVTMSheet(sheetObject);
      }
    );
  }

  toggleLockEdition(): void {
    const characterSheetUpdated = {
      ...this.characterSheet,
      ...{ isEditable: !this.characterSheet.isEditable}
     } as VampireMasqueradeSheet;

    this.sheetStoreService.loadVampireVTMSheet(characterSheetUpdated);
  }
}
