import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {
  InfoDialogComponent,
  InfoDialogData,
} from '../components/info-dialog/info-dialog.component';

@Injectable()
export class CreationDialogService {
  constructor(private dialog: MatDialog) {}

  /** Read-only information modal. */
  openInfo(data: InfoDialogData): void {
    this.dialog.open(InfoDialogComponent, {
      data,
      width: '560px',
      maxWidth: '95vw',
      maxHeight: '90vh',
      autoFocus: false,
    });
  }

  /** Selectable picker modal; emits the chosen item id (or undefined). */
  openPicker(data: InfoDialogData): Observable<string | undefined> {
    return this.dialog
      .open(InfoDialogComponent, {
        data,
        width: '560px',
        maxWidth: '95vw',
        maxHeight: '90vh',
        autoFocus: false,
      })
      .afterClosed();
  }
}
