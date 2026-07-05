import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ExperienceEntry } from 'src/app/shared/model/sheet/advantages/Experience';

@Component({
  selector: 'arm-dialog-add-experience',
  templateUrl: './dialog-add-experience.component.html',
  styleUrls: ['./dialog-add-experience.component.scss'],
})
export class DialogAddExperienceComponent {
  entry: ExperienceEntry = {
    points: 1,
    date: new Date().toISOString().split('T')[0],
    field: '',
  };

  constructor(public dialogRef: MatDialogRef<DialogAddExperienceComponent, ExperienceEntry>) {}

  get isValid(): boolean {
    return this.entry.points >= 1 && !!this.entry.field.trim();
  }

  confirm(): void {
    if (this.isValid) {
      this.dialogRef.close({ ...this.entry, field: this.entry.field.trim() });
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
