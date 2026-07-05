import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CreationDialogService } from './creation-dialog.service';
import { SECT_IDS } from '../data/sects.data';

/** Extended-lore sections shown in the sect info modal, in display order. */
const SECTIONS = ['history', 'practices', 'conclaves', 'rituals'] as const;

@Injectable()
export class SectService {
  constructor(
    private dialogs: CreationDialogService,
    private translate: TranslateService
  ) {}

  /** Whether the stored value is a known sect id (free text has no info). */
  has(sectId: string | undefined | null): boolean {
    return !!sectId && (SECT_IDS as readonly string[]).includes(sectId);
  }

  open(sectId: string): void {
    const base = 'creationVtm.descriptions.sects.' + sectId + '.';
    this.dialogs.openInfo({
      title: this.translate.instant('creationVtm.sects.' + sectId),
      body: this.translate.instant(base + 'summary'),
      sections: SECTIONS.map((section) => ({
        name: this.translate.instant('creationVtm.sectDetail.' + section),
        text: this.translate.instant(base + section),
      })),
    });
  }
}
