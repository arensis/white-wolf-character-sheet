import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PropertyManagement } from 'src/app/shared/components/PropertyManagement';
import { VampireDarkAgesSheetStoreService } from 'src/app/shared/services/vampire-dark-ages-sheet-store.service';
import { getRoadContent } from 'src/app/vampire-dark-age/creation/data/roads-content.data';
import { RoadInfoDialogComponent } from './road-info-dialog/road-info-dialog.component';

@Component({
  selector: 'arm-road',
  templateUrl: './road.component.html',
  styleUrls: ['./road.component.scss'],
})
export class RoadComponent extends PropertyManagement {
  propertiesMainPath: string = 'advantages.road';

  constructor(
    vampireDASheetStoreService: VampireDarkAgesSheetStoreService,
    private dialog: MatDialog,
  ) {
    super(vampireDASheetStoreService);
  }

  updateProperty(event: any, propertyName: string): void {
    this.updateValueFromProperty(event, propertyName, this.vampireDASheetStoreService.loadVampireDASheet);
  }

  openInfo(): void {
    const roadId = this.characterSheet?.advantages?.road?.name;
    const content = roadId ? getRoadContent(roadId) : undefined;
    if (content) {
      this.dialog.open(RoadInfoDialogComponent, {
        data: content,
        width: '560px',
        maxWidth: '95vw',
        maxHeight: '90vh',
      });
    }
  }

  get hasRoadInfo(): boolean {
    const roadId = this.characterSheet?.advantages?.road?.name;
    return !!roadId && !!getRoadContent(roadId);
  }
}
