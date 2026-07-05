import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { getAttributeContent } from '../data/attributes-content.data';
import { CreationDialogService } from './creation-dialog.service';

const DOTS = ['•', '••', '•••', '••••', '•••••'];

@Injectable()
export class AttributeService {
  constructor(
    private dialogs: CreationDialogService,
    private translate: TranslateService
  ) {}

  /** Whether the attribute has book info. */
  has(key: string): boolean {
    return !!getAttributeContent(key);
  }

  /**
   * Info modal for an attribute. `labelKey` is the i18n key of its name
   * (e.g. `sheet.attributes.physical.strength`).
   */
  open(labelKey: string, key: string): void {
    const content = getAttributeContent(key);
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
