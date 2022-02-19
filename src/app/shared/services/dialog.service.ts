import { Injectable } from '@angular/core';
import { DialogPosition, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogAddNewPropertyComponent } from '../components/dialog-add-new-property/dialog-add-new-property.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  openDialogWithInput(propertyName: string): MatDialogRef<DialogAddNewPropertyComponent, any> {
    return this.dialog.open(DialogAddNewPropertyComponent, {
      width: '279px',
      data: { propertyName: 'Nombre de ' + propertyName, propertyValue: '' }
    });
  }

}
