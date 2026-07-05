import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { getClan } from '../data/clans.data';
import { CreationDialogService } from './creation-dialog.service';

/** clanDetails fields shown as sections in the clan info modal, in order. */
const SECTIONS = ['appearance', 'stereotypes', 'organization', 'creationHints'] as const;

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
    const base = 'creation.descriptions.clanDetails.' + clanId + '.';
    this.dialogs.openInfo({
      title: this.translate.instant('creation.clans.' + clanId),
      body: this.translate.instant('creation.descriptions.clans.' + clanId),
      sections: [
        ...SECTIONS.map((section) => ({
          name: this.translate.instant('creation.clanDetail.' + section),
          text: this.translate.instant(base + section),
        })),
        {
          name: this.translate.instant('creation.clanDetail.weakness'),
          text: this.translate.instant(base + 'weaknessDetail'),
        },
      ],
    });
  }
}
