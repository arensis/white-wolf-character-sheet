import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as _ from 'lodash';
import { PropertyManagement } from 'src/app/shared/components/PropertyManagement';
import { VampireDarkAgesSheetStoreService } from 'src/app/shared/services/vampire-dark-ages-sheet-store.service';
import { ExperienceEntry } from 'src/app/shared/model/sheet/advantages/Experience';
import { DialogAddExperienceComponent } from './dialog-add-experience/dialog-add-experience.component';

@Component({
  selector: 'arm-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent extends PropertyManagement {
  propertiesMainPath = 'advantages.experience';

  constructor(
    vampireDASheetStoreService: VampireDarkAgesSheetStoreService,
    private dialog: MatDialog,
  ) {
    super(vampireDASheetStoreService);
  }

  get entries(): ExperienceEntry[] {
    return this.characterSheet?.advantages?.experience?.entries ?? [];
  }

  get totalSpent(): number {
    return this.entries.reduce((sum, e) => sum + (e.points || 0), 0);
  }

  setTotal(value: string): void {
    const total = parseInt(value, 10);
    if (isNaN(total)) return;
    const sheet = _.cloneDeep(this.characterSheet);
    sheet.advantages.experience.total = total;
    sheet.advantages.experience.current = total - this.totalSpent;
    this.vampireDASheetStoreService.loadVampireDASheet(sheet);
  }

  openAddDialog(): void {
    this.dialog
      .open(DialogAddExperienceComponent, { width: '480px' })
      .afterClosed()
      .subscribe((entry: ExperienceEntry | undefined) => {
        if (!entry) return;
        const sheet = _.cloneDeep(this.characterSheet);
        if (!sheet.advantages.experience.entries) sheet.advantages.experience.entries = [];
        sheet.advantages.experience.entries.push(entry);
        const spent = sheet.advantages.experience.entries.reduce((s, e) => s + e.points, 0);
        sheet.advantages.experience.current = sheet.advantages.experience.total - spent;
        this.vampireDASheetStoreService.loadVampireDASheet(sheet);
      });
  }

  removeEntry(index: number): void {
    const sheet = _.cloneDeep(this.characterSheet);
    (sheet.advantages.experience.entries ?? []).splice(index, 1);
    const spent = (sheet.advantages.experience.entries ?? []).reduce((s, e) => s + e.points, 0);
    sheet.advantages.experience.current = sheet.advantages.experience.total - spent;
    this.vampireDASheetStoreService.loadVampireDASheet(sheet);
  }
}
