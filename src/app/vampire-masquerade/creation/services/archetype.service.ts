import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { getArchetypeContent } from '../data/archetypes-content.data';
import { CreationDialogService } from './creation-dialog.service';

@Injectable()
export class ArchetypeService {
  constructor(
    private dialogs: CreationDialogService,
    private translate: TranslateService
  ) {}

  /** Whether the archetype id has book info (free-text values do not). */
  has(id: string | undefined | null): boolean {
    return !!id && !!getArchetypeContent(id);
  }

  /** Info modal for an archetype (Nature/Demeanor). */
  open(id: string): void {
    const content = getArchetypeContent(id);
    if (!content) {
      return;
    }
    this.dialogs.openInfo({
      title: this.translate.instant('creationVtm.archetypeNames.' + id),
      body: content.description,
      sections: [
        {
          name: this.translate.instant('creationVtm.archetypeDetail.willpower'),
          text: content.willpower,
        },
      ],
    });
  }
}
