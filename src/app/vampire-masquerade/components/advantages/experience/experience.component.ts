import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as _ from 'lodash';
import { VtmPropertyManagement } from 'src/app/vampire-masquerade/shared-base/VtmPropertyManagement';
import { VampireMasqueradeSheetStoreService } from 'src/app/vampire-masquerade/services/vampire-masquerade-sheet-store.service';
import { ExperienceEntry } from 'src/app/shared/model/sheet/advantages/Experience';
import { DialogAddExperienceComponent } from './dialog-add-experience/dialog-add-experience.component';

@Component({
  selector: 'arm-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent extends VtmPropertyManagement {
  propertiesMainPath = 'advantages.experience';

  constructor(
    vampireVTMSheetStoreService: VampireMasqueradeSheetStoreService,
    private dialog: MatDialog,
  ) {
    super(vampireVTMSheetStoreService);
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
    this.vampireVTMSheetStoreService.loadVampireVTMSheet(sheet);
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
        this.vampireVTMSheetStoreService.loadVampireVTMSheet(sheet);
      });
  }

  removeEntry(index: number): void {
    const sheet = _.cloneDeep(this.characterSheet);
    (sheet.advantages.experience.entries ?? []).splice(index, 1);
    const spent = (sheet.advantages.experience.entries ?? []).reduce((s, e) => s + e.points, 0);
    sheet.advantages.experience.current = sheet.advantages.experience.total - spent;
    this.vampireVTMSheetStoreService.loadVampireVTMSheet(sheet);
  }
}
