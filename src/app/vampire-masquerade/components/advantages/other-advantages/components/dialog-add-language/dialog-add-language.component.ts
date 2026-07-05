import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LANGUAGE_GROUPS, LanguageItem } from 'src/app/vampire-masquerade/creation/data/languages.data';

@Component({
  selector: 'arm-dialog-add-language',
  templateUrl: './dialog-add-language.component.html',
  styleUrls: ['./dialog-add-language.component.scss'],
})
export class DialogAddLanguageComponent {
  mode: 'list' | 'custom' = 'list';
  selected: LanguageItem | null = null;
  customName = '';

  readonly groups = LANGUAGE_GROUPS;

  constructor(public dialogRef: MatDialogRef<DialogAddLanguageComponent, string>) {}

  select(item: LanguageItem): void {
    this.selected = item;
  }

  confirm(): void {
    if (this.mode === 'list' && this.selected) {
      this.dialogRef.close(this.selected.name);
    } else if (this.mode === 'custom' && this.customName.trim()) {
      this.dialogRef.close(this.customName.trim());
    }
  }

  get isConfirmDisabled(): boolean {
    if (this.mode === 'list') return !this.selected;
    return !this.customName.trim();
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
