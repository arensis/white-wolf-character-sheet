import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoadContent } from 'src/app/vampire-masquerade/creation/data/roads-content.data';

@Component({
  selector: 'arm-path-info-dialog',
  templateUrl: './path-info-dialog.component.html',
  styleUrls: ['./path-info-dialog.component.scss'],
})
export class PathInfoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PathInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public road: RoadContent,
  ) {}
}
