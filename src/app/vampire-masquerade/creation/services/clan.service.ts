import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { getClan } from '../data/clans.data';
import { CreationDialogService } from './creation-dialog.service';

/** clanDetails fields shown as sections in the clan info modal, in order. */
const SECTIONS = ['sect', 'appearance', 'haven', 'background', 'creationHints'] as const;

@Injectable()
export class ClanService {
  constructor(
    private dialogs: CreationDialogService,
    private translate: TranslateService
  ) {}

  /** Whether the stored value is a known clan id (free text has no info). */
  has(clanId: string | undefined | null): boolean {
    return !!clanId && !!getClan(clanId);
  }

  open(clanId: string): void {
    const base = 'creationVtm.descriptions.clanDetails.' + clanId + '.';
    this.dialogs.openInfo({
      title: this.translate.instant('creationVtm.clans.' + clanId),
      body:
        this.translate.instant('creationVtm.descriptions.clans.' + clanId) +
        '\n\n' +
        this.translate.instant(base + 'summary'),
      sections: [
        ...SECTIONS.map((section) => ({
          name: this.translate.instant('creationVtm.clanDetail.' + section),
          text: this.translate.instant(base + section),
        })),
        {
          name: this.translate.instant('creationVtm.clanDetail.weakness'),
          text: this.translate.instant('creationVtm.clanWeakness.' + clanId),
        },
      ],
    });
  }
}
