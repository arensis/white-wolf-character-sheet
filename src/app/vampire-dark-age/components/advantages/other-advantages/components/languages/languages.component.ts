import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as _ from 'lodash';
import { CustomPropertyManagement } from 'src/app/shared/components/CustomPropertyManagement';
import { VampireDarkAgesSheetStoreService } from 'src/app/shared/services/vampire-dark-ages-sheet-store.service';
import { DialogAddLanguageComponent } from '../dialog-add-language/dialog-add-language.component';

@Component({
  selector: 'arm-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent extends CustomPropertyManagement {
  propertyType: string = 'language';
  customPropertyType: string = 'languages';
  propertiesMainPath: string = 'advantages';

  constructor(
    vampireDASheetStoreService: VampireDarkAgesSheetStoreService,
    private dialog: MatDialog,
  ) {
    super(vampireDASheetStoreService);
    this.valuePropertyName = 'level';
  }

  openAddDialog(): void {
    this.dialog
      .open(DialogAddLanguageComponent, { width: '360px' })
      .afterClosed()
      .subscribe((name: string | undefined) => {
        if (name) {
          const sheet = _.cloneDeep(this.characterSheet);
          (sheet.advantages.languages as any[]).push({ name, level: 0 });
          this.vampireDASheetStoreService.loadVampireDASheet(sheet);
        }
      });
  }

  deleteLanguage(index: number): void {
    this.deleteCustomProperty(index, (sheet) =>
      this.vampireDASheetStoreService.loadVampireDASheet(sheet),
    );
  }
}
