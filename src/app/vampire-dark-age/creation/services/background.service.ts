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
    this.dialogs.openInfo({
      title: this.translate.instant('creation.backgrounds.' + key),
      body: content?.description ?? this.translate.instant('creation.descriptions.backgrounds.' + key),
      levels: content?.levels,
    });
  }
}
