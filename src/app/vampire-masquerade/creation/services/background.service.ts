import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { getBackgroundContent } from '../data/backgrounds-content.data';
import { CreationDialogService } from './creation-dialog.service';

@Injectable()
export class BackgroundService {
  constructor(
    private dialogs: CreationDialogService,
    private translate: TranslateService
  ) {}

  open(key: string): void {
    const content = getBackgroundContent(key);
    // The sheet namespace names all 14 V20 backgrounds; creation.* only the
    // ten shared with Dark Ages.
    this.dialogs.openInfo({
      title: this.translate.instant('sheet.advantages.backgrounds.' + key),
      body: content?.description ?? this.translate.instant('creationVtm.descriptions.backgrounds.' + key),
      levels: content?.levels,
    });
  }
}
