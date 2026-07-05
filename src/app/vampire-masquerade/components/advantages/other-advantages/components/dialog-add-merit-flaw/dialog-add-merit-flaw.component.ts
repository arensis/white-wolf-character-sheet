import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  MERITS_FLAWS,
  MERIT_FLAW_CATEGORIES,
  MeritFlawEntry,
  MeritFlawType,
  MeritFlawCategory,
} from 'src/app/vampire-masquerade/creation/data/merits-flaws.data';

export interface MeritFlawDialogData {
  type: MeritFlawType;
}

export interface MeritFlawDialogResult {
  name: string;
  level: number;
  category: string;
}

const CATEGORY_SINGULAR: Record<MeritFlawCategory, string> = {
  physical: 'Físico',
  mental: 'Mental',
  social: 'Social',
  supernatural: 'Sobrenatural',
};

@Component({
  selector: 'arm-dialog-add-merit-flaw',
  templateUrl: './dialog-add-merit-flaw.component.html',
  styleUrls: ['./dialog-add-merit-flaw.component.scss'],
})
export class DialogAddMeritFlawComponent {
  mode: 'list' | 'custom' = 'list';
  selected: MeritFlawEntry | null = null;

  customName = '';
  customCategory: MeritFlawCategory = 'physical';
  customLevel = 1;

  readonly categories = MERIT_FLAW_CATEGORIES;
  readonly categorySingular = CATEGORY_SINGULAR;
  readonly grouped: { id: string; label: string; items: MeritFlawEntry[] }[];

  constructor(
    public dialogRef: MatDialogRef<DialogAddMeritFlawComponent, MeritFlawDialogResult>,
    @Inject(MAT_DIALOG_DATA) public data: MeritFlawDialogData,
  ) {
    const filtered = MERITS_FLAWS.filter(m => m.type === data.type);
    this.grouped = MERIT_FLAW_CATEGORIES.map(cat => ({
      id: cat.id,
      label: cat.label,
      items: filtered.filter(m => m.category === cat.id),
    })).filter(g => g.items.length > 0);
  }

  select(item: MeritFlawEntry): void {
    this.selected = item;
  }

  confirm(): void {
    if (this.mode === 'list' && this.selected) {
      this.dialogRef.close({ name: this.selected.name, level: this.selected.cost, category: this.selected.category });
    } else if (this.mode === 'custom' && this.customName.trim()) {
      this.dialogRef.close({ name: this.customName.trim(), level: this.customLevel, category: this.customCategory });
    }
  }

  get isConfirmDisabled(): boolean {
    if (this.mode === 'list') return !this.selected;
    return !this.customName.trim() || this.customLevel < 1;
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
