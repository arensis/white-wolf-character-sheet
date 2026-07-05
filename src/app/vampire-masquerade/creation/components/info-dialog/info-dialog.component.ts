import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface InfoDialogLevel {
  /** Dot label, e.g. "•" / "1". */
  dots: string;
  /** Power / level name (optional). */
  name?: string;
  /** What it does, including the mechanic. */
  text: string;
}

export interface InfoDialogPath {
  name: string;
  text?: string;
  /** The path's own level 1-5 powers. */
  levels?: InfoDialogLevel[];
}

export interface InfoDialogItem {
  id: string;
  name: string;
  text?: string;
  /** Optional detail revealed when the item is expanded (collapsible). */
  levels?: InfoDialogLevel[];
}

export interface InfoDialogData {
  title: string;
  /** Free-text description. */
  body?: string;
  /** Titled free-text sections shown after the body (sect lore, etc.). */
  sections?: { name: string; text: string }[];
  /** Rules summary shown as a "how it works" section. */
  rules?: string;
  /** Per-level breakdown (disciplines, backgrounds, roads). */
  levels?: InfoDialogLevel[];
  /** Intro note shown above the paths section. */
  pathsNote?: string;
  /** Paths/sendas (Thaumaturgy, Mortis), each with its own levels. */
  paths?: InfoDialogPath[];
  /** Intro note shown above the rituals section. */
  ritualsNote?: string;
  /** Rituals, listed separately from paths. */
  rituals?: InfoDialogLevel[];
  /** List of items. Selectable by default; clicking resolves its id. */
  items?: InfoDialogItem[];
  /** Set false to render `items` as a read-only list. */
  selectable?: boolean;
  /** Currently selected item id (single-select picker mode). */
  selectedId?: string;
  /** Multi-select mode: clicking toggles instead of closing. */
  multiSelect?: boolean;
  /** Live array of selected ids (multi-select mode). */
  selectedIds?: string[];
  /** Toggle callback (multi-select mode). */
  onToggle?: (id: string) => void;
}

@Component({
  selector: 'arm-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss'],
})
export class InfoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<InfoDialogComponent, string | undefined>,
    @Inject(MAT_DIALOG_DATA) public data: InfoDialogData
  ) {}

  expandedId: string | null = null;

  get hasItems(): boolean {
    return !!this.data.items?.length;
  }

  get selectable(): boolean {
    return this.data.selectable !== false;
  }

  isSelected(id: string): boolean {
    if (this.data.multiSelect) {
      return !!this.data.selectedIds?.includes(id);
    }
    return id === this.data.selectedId;
  }

  toggleExpand(id: string, event: MouseEvent): void {
    event.stopPropagation();
    this.expandedId = this.expandedId === id ? null : id;
  }

  choose(id: string): void {
    if (this.data.multiSelect) {
      this.data.onToggle?.(id);
      return;
    }
    if (this.selectable) {
      this.dialogRef.close(id);
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
