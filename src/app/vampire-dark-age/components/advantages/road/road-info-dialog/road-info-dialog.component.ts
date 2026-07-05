import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoadContent } from 'src/app/vampire-dark-age/creation/data/roads-content.data';

@Component({
  selector: 'arm-road-info-dialog',
  templateUrl: './road-info-dialog.component.html',
  styleUrls: ['./road-info-dialog.component.scss'],
})
export class RoadInfoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RoadInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public road: RoadContent,
  ) {}
}
