import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as _ from 'lodash';
import { CustomPropertyManagement } from 'src/app/shared/components/CustomPropertyManagement';
import { VampireDarkAgesSheetStoreService } from 'src/app/shared/services/vampire-dark-ages-sheet-store.service';
import { MERIT_FLAW_CATEGORIES } from 'src/app/vampire-dark-age/creation/data/merits-flaws.data';
import {
  DialogAddMeritFlawComponent,
  MeritFlawDialogResult,
} from '../dialog-add-merit-flaw/dialog-add-merit-flaw.component';

const CATEGORY_SINGULAR: Record<string, string> = {
  physical: 'Físico',
  mental: 'Mental',
  social: 'Social',
  supernatural: 'Sobrenatural',
};

@Component({
  selector: 'arm-merits',
  templateUrl: './merits.component.html',
  styleUrls: ['./merits.component.scss'],
})
export class MeritsComponent extends CustomPropertyManagement {
  propertyType: string = 'merit';
  customPropertyType: string = 'merits';
  propertiesMainPath: string = 'advantages';

  constructor(
    vampireDASheetStoreService: VampireDarkAgesSheetStoreService,
    private dialog: MatDialog,
  ) {
    super(vampireDASheetStoreService);
    this.valuePropertyName = 'level';
  }

  categoryLabel(category: string): string {
    return CATEGORY_SINGULAR[category] ?? '';
  }

  openAddDialog(): void {
    this.dialog
      .open(DialogAddMeritFlawComponent, { width: '400px', data: { type: 'merit' } })
      .afterClosed()
      .subscribe((result: MeritFlawDialogResult | undefined) => {
        if (result) {
          const sheet = _.cloneDeep(this.characterSheet);
          (sheet.advantages.merits as any[]).push(result);
          this.vampireDASheetStoreService.loadVampireDASheet(sheet);
        }
      });
  }

  deleteMerit(index: number): void {
    this.deleteCustomProperty(index, (sheet) =>
      this.vampireDASheetStoreService.loadVampireDASheet(sheet),
    );
  }
}
