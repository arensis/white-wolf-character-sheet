import { TranslateService } from '@ngx-translate/core';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { isBlankOrEmpty } from 'src/app/utils/stringUtils';
import { DialogInputData } from '../../model/DialogInputData';

@Component({
  selector: 'arm-dialog-add-new-property',
  templateUrl: './dialog-add-new-property.component.html',
  styleUrls: ['./dialog-add-new-property.component.scss']
})
export class DialogAddNewPropertyComponent {
  constructor(
    private translate: TranslateService,
    public dialogRef: MatDialogRef<DialogAddNewPropertyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogInputData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  isDisabled(): boolean {
    return isBlankOrEmpty(this.data.propertyValue);
  }
}
