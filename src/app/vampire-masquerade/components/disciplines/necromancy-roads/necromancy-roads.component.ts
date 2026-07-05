import { Component } from '@angular/core';
import * as _ from 'lodash';
import { VtmPropertyManagement } from 'src/app/vampire-masquerade/shared-base/VtmPropertyManagement';
import { VampireMasqueradeSheetStoreService } from 'src/app/vampire-masquerade/services/vampire-masquerade-sheet-store.service';
import { getDisciplineContent, DisciplinePathInfo, DisciplineRitual } from 'src/app/vampire-masquerade/creation/data/disciplines-content.data';
import { DisciplineService } from 'src/app/vampire-masquerade/creation/services/discipline.service';

@Component({
  selector: 'arm-necromancy-roads',
  templateUrl: './necromancy-roads.component.html',
  styleUrls: ['./necromancy-roads.component.scss']
})
export class NecromancyRoadsComponent extends VtmPropertyManagement {
  propertiesMainPath = 'disciplines.necromancy';

  constructor(
    vampireVTMSheetStoreService: VampireMasqueradeSheetStoreService,
    public discipline: DisciplineService,
  ) {
    super(vampireVTMSheetStoreService);
  }

  get knownPaths(): DisciplinePathInfo[] {
    return getDisciplineContent('necromancy')?.paths ?? [];
  }

  get knownRituals(): DisciplineRitual[] {
    return getDisciplineContent('necromancy')?.rituals ?? [];
  }

  get ritualsNote(): string {
    return getDisciplineContent('necromancy')?.ritualsNote ?? '';
  }

  get necromancyLevel(): number {
    return this.characterSheet?.disciplines?.necromancy?.level ?? 0;
  }

  get maxSecondaryLevel(): number {
    return Math.max(0, this.necromancyLevel - 1);
  }

  get availableRituals(): DisciplineRitual[] {
    return this.knownRituals.filter(r => r.level <= this.necromancyLevel);
  }

  getPathLevel(name: string): number {
    const path = this.characterSheet?.disciplines?.necromancy?.paths?.find((p: any) => p.name === name);
    if (!path) return 0;
    return (path as any).inBlood ? this.necromancyLevel : path.level;
  }

  isPrimary(name: string): boolean {
    return !!(this.characterSheet?.disciplines?.necromancy?.paths?.find((p: any) => p.name === name && p.inBlood));
  }

  setPrimary(name: string): void {
    const sheet = _.cloneDeep(this.characterSheet);
    (sheet.disciplines.necromancy.paths as any[]).forEach((p: any) => { p.inBlood = false; });
    let path: any = (sheet.disciplines.necromancy.paths as any[]).find((p: any) => p.name === name);
    if (!path) {
      path = { name, level: this.necromancyLevel, inBlood: true };
      (sheet.disciplines.necromancy.paths as any[]).push(path);
    } else {
      path.inBlood = true;
      path.level = this.necromancyLevel;
    }
    this.vampireVTMSheetStoreService.loadVampireVTMSheet(sheet);
  }

  setLevel(name: string, level: number): void {
    const capped = Math.min(level, this.maxSecondaryLevel);
    const sheet = _.cloneDeep(this.characterSheet);
    const paths: any[] = sheet.disciplines.necromancy.paths as any[];
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
    this.vampireVTMSheetStoreService.loadVampireVTMSheet(sheet);
  }

  isRitualSelected(name: string): boolean {
    return !!(this.characterSheet?.disciplines?.necromancy?.rituals?.some((r: any) => r.name === name));
  }

  toggleRitual(ritual: DisciplineRitual): void {
    const sheet = _.cloneDeep(this.characterSheet);
    const rituals: any[] = sheet.disciplines.necromancy.rituals as any[];
    const idx = rituals.findIndex((r: any) => r.name === ritual.name);
    if (idx >= 0) {
      rituals.splice(idx, 1);
    } else {
      rituals.push({ name: ritual.name, level: ritual.level });
    }
    this.vampireVTMSheetStoreService.loadVampireVTMSheet(sheet);
  }
}
