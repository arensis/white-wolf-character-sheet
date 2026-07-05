import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as _ from 'lodash';
import { VtmCustomPropertyManagement } from 'src/app/vampire-masquerade/shared-base/VtmCustomPropertyManagement';
import { VampireMasqueradeSheetStoreService } from 'src/app/vampire-masquerade/services/vampire-masquerade-sheet-store.service';
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
  selector: 'arm-flaws',
  templateUrl: './flaws.component.html',
  styleUrls: ['./flaws.component.scss'],
})
export class FlawsComponent extends VtmCustomPropertyManagement {
  propertyType: string = 'flaw';
  customPropertyType: string = 'flaws';
  propertiesMainPath: string = 'advantages';

  constructor(
    vampireVTMSheetStoreService: VampireMasqueradeSheetStoreService,
    private dialog: MatDialog,
  ) {
    super(vampireVTMSheetStoreService);
    this.valuePropertyName = 'level';
  }

  categoryLabel(category: string): string {
    return CATEGORY_SINGULAR[category] ?? '';
  }

  openAddDialog(): void {
    this.dialog
      .open(DialogAddMeritFlawComponent, { width: '400px', data: { type: 'flaw' } })
      .afterClosed()
      .subscribe((result: MeritFlawDialogResult | undefined) => {
        if (result) {
          const sheet = _.cloneDeep(this.characterSheet);
          (sheet.advantages.flaws as any[]).push(result);
          this.vampireVTMSheetStoreService.loadVampireVTMSheet(sheet);
        }
      });
  }

  deleteFlaw(index: number): void {
    this.deleteCustomProperty(index, (sheet) =>
      this.vampireVTMSheetStoreService.loadVampireVTMSheet(sheet),
    );
  }
}
