import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VtmPropertyManagement } from 'src/app/vampire-masquerade/shared-base/VtmPropertyManagement';
import { VampireMasqueradeSheetStoreService } from 'src/app/vampire-masquerade/services/vampire-masquerade-sheet-store.service';
import { getRoadContent } from 'src/app/vampire-masquerade/creation/data/roads-content.data';
import { PathInfoDialogComponent } from './path-info-dialog/path-info-dialog.component';

@Component({
  selector: 'arm-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.scss'],
})
export class PathComponent extends VtmPropertyManagement {
  propertiesMainPath: string = 'advantages.path';

  constructor(
    vampireVTMSheetStoreService: VampireMasqueradeSheetStoreService,
    private dialog: MatDialog,
  ) {
    super(vampireVTMSheetStoreService);
  }

  openInfo(): void {
    const pathId = this.characterSheet?.advantages?.path?.name;
    const content = pathId ? getRoadContent(pathId) : undefined;
    if (content) {
      this.dialog.open(PathInfoDialogComponent, {
        data: content,
        width: '560px',
        maxWidth: '95vw',
        maxHeight: '90vh',
      });
    }
  }

  get hasRoadInfo(): boolean {
    const pathId = this.characterSheet?.advantages?.path?.name;
    return !!pathId && !!getRoadContent(pathId);
  }

  updateProperty(event: any, propertyName: string): void {
    this.updateValueFromProperty(event, propertyName, this.vampireVTMSheetStoreService.loadVampireVTMSheet);
  }
}
