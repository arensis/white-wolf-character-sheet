import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as _ from 'lodash';
import { VtmCustomPropertyManagement } from 'src/app/vampire-masquerade/shared-base/VtmCustomPropertyManagement';
import { VampireMasqueradeSheetStoreService } from 'src/app/vampire-masquerade/services/vampire-masquerade-sheet-store.service';
import { DialogAddLanguageComponent } from '../dialog-add-language/dialog-add-language.component';

@Component({
  selector: 'arm-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent extends VtmCustomPropertyManagement {
  propertyType: string = 'language';
  customPropertyType: string = 'languages';
  propertiesMainPath: string = 'advantages';

  constructor(
    vampireVTMSheetStoreService: VampireMasqueradeSheetStoreService,
    private dialog: MatDialog,
  ) {
    super(vampireVTMSheetStoreService);
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
          this.vampireVTMSheetStoreService.loadVampireVTMSheet(sheet);
        }
      });
  }

  deleteLanguage(index: number): void {
    this.deleteCustomProperty(index, (sheet) =>
      this.vampireVTMSheetStoreService.loadVampireVTMSheet(sheet),
    );
  }
}
