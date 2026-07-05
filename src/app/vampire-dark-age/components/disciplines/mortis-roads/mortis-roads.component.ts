import { Component } from '@angular/core';
import * as _ from 'lodash';
import { PropertyManagement } from 'src/app/shared/components/PropertyManagement';
import { VampireDarkAgesSheetStoreService } from 'src/app/shared/services/vampire-dark-ages-sheet-store.service';
import { getDisciplineContent, DisciplinePathInfo, DisciplineRitual } from 'src/app/vampire-dark-age/creation/data/disciplines-content.data';
import { DisciplineService } from 'src/app/vampire-dark-age/creation/services/discipline.service';

@Component({
  selector: 'arm-mortis-roads',
  templateUrl: './mortis-roads.component.html',
  styleUrls: ['./mortis-roads.component.scss']
})
export class MortisRoadsComponent extends PropertyManagement {
  propertiesMainPath = 'disciplines.mortis';

  constructor(
    vampireDASheetStoreService: VampireDarkAgesSheetStoreService,
    public discipline: DisciplineService,
  ) {
    super(vampireDASheetStoreService);
  }

  get knownPaths(): DisciplinePathInfo[] {
    return getDisciplineContent('mortis')?.paths ?? [];
  }

  get knownRituals(): DisciplineRitual[] {
    return getDisciplineContent('mortis')?.rituals ?? [];
  }

  get ritualsNote(): string {
    return getDisciplineContent('mortis')?.ritualsNote ?? '';
  }

  get mortisLevel(): number {
    return this.characterSheet?.disciplines?.mortis?.level ?? 0;
  }

  get maxSecondaryLevel(): number {
    return Math.max(0, this.mortisLevel - 1);
  }

  get availableRituals(): DisciplineRitual[] {
    return this.knownRituals.filter(r => r.level <= this.mortisLevel);
  }

  getPathLevel(name: string): number {
    const path = this.characterSheet?.disciplines?.mortis?.paths?.find((p: any) => p.name === name);
    if (!path) return 0;
    return (path as any).inBlood ? this.mortisLevel : path.level;
  }

  isPrimary(name: string): boolean {
    return !!(this.characterSheet?.disciplines?.mortis?.paths?.find((p: any) => p.name === name && p.inBlood));
  }

  setPrimary(name: string): void {
    const sheet = _.cloneDeep(this.characterSheet);
    (sheet.disciplines.mortis.paths as any[]).forEach((p: any) => { p.inBlood = false; });
    let path: any = (sheet.disciplines.mortis.paths as any[]).find((p: any) => p.name === name);
    if (!path) {
      path = { name, level: this.mortisLevel, inBlood: true };
      (sheet.disciplines.mortis.paths as any[]).push(path);
    } else {
      path.inBlood = true;
      path.level = this.mortisLevel;
    }
    this.vampireDASheetStoreService.loadVampireDASheet(sheet);
  }

  setLevel(name: string, level: number): void {
    const capped = Math.min(level, this.maxSecondaryLevel);
    const sheet = _.cloneDeep(this.characterSheet);
    const paths: any[] = sheet.disciplines.mortis.paths as any[];
    const idx = paths.findIndex((p: any) => p.name === name && !p.inBlood);
    if (capped === 0) {
      if (idx >= 0) paths.splice(idx, 1);
    } else {
      if (idx >= 0) {
        paths[idx].level = capped;
      } else {
        paths.push({ name, level: capped, inBlood: false });
      }
    }
    this.vampireDASheetStoreService.loadVampireDASheet(sheet);
  }

  isRitualSelected(name: string): boolean {
    return !!(this.characterSheet?.disciplines?.mortis?.rituals?.some((r: any) => r.name === name));
  }

  toggleRitual(ritual: DisciplineRitual): void {
    const sheet = _.cloneDeep(this.characterSheet);
    const rituals: any[] = sheet.disciplines.mortis.rituals as any[];
    const idx = rituals.findIndex((r: any) => r.name === ritual.name);
    if (idx >= 0) {
      rituals.splice(idx, 1);
    } else {
      rituals.push({ name: ritual.name, level: ritual.level });
    }
    this.vampireDASheetStoreService.loadVampireDASheet(sheet);
  }
}
