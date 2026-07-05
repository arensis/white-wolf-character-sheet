import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { getAbilityContent } from '../data/abilities-content.data';
import { CreationDialogService } from './creation-dialog.service';

const DOTS = ['•', '••', '•••', '••••', '•••••'];

@Injectable()
export class AbilityService {
  constructor(
    private dialogs: CreationDialogService,
    private translate: TranslateService
  ) {}

  /** Whether the ability has book info (custom abilities do not). */
  has(key: string): boolean {
    return !!getAbilityContent(key);
  }

  /**
   * Info modal for an ability. `labelKey` is the i18n key of its name
   * (e.g. `sheet.abilities.talents.alertness`).
   */
  open(labelKey: string, key: string): void {
    const content = getAbilityContent(key);
    if (!content) {
      return;
    }
    this.dialogs.openInfo({
      title: this.translate.instant(labelKey),
      body: content.description,
      levels: content.levels.map((text, i) => ({
        dots: DOTS[i] ?? String(i + 1),
        text,
      })),
      sections: content.specialties
        ? [
            {
              name: this.translate.instant('creationVtm.abilityDetail.specialties'),
              text: content.specialties,
            },
          ]
        : undefined,
    });
  }
}
