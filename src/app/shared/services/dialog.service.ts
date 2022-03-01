import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { DialogPosition, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogAddNewPropertyComponent } from '../components/dialog-add-new-property/dialog-add-new-property.component';

@Injectable()
export class DialogService {

  constructor(public dialog: MatDialog, private translateService: TranslateService) { }

  openDialogWithInput(propertyName: string): MatDialogRef<DialogAddNewPropertyComponent, any> {
    return this.dialog.open(DialogAddNewPropertyComponent, {
      width: '279px',
      data: {
        propertyName: this.translateService.instant(
          'custom-property-button.input-label.' + propertyName),
        propertyValue: '' }
    });
  }

}
