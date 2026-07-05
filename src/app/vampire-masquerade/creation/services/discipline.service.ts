import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { InfoDialogLevel } from '../components/info-dialog/info-dialog.component';
import { getDisciplineContent, DisciplinePathInfo, DisciplineRitual } from '../data/disciplines-content.data';
import { CreationDialogService } from './creation-dialog.service';
import { CreationStateService } from './creation-state.service';

const DOTS = ['•', '••', '•••', '••••', '•••••'];

@Injectable()
export class DisciplineService {
  constructor(
    private dialogs: CreationDialogService,
    private translate: TranslateService,
    private state: CreationStateService
  ) {}

  /** Picker: choose the primary path (senda) for a magic discipline. Each
   * senda is collapsible, revealing its own 1-5 levels. */
  chooseSenda(key: string): void {
    const paths = getDisciplineContent(key)?.paths ?? [];
    this.dialogs
      .openPicker({
        title: this.translate.instant('creation.dialog.choosePath'),
        items: paths.map((p) => ({
          id: p.name,
          name: p.name,
          text: p.text,
          levels: p.levels.map((level, i) => ({
            dots: DOTS[i] ?? String(i + 1),
            name: level.name,
            text: level.text,
          })),
        })),
        selectedId: this.state.magicPath,
      })
      .subscribe((id) => {
        if (id) {
          this.state.magicPath = id;
        }
      });
  }

  /** Picker: choose a starting (level 1) ritual for a magic discipline. */
  chooseRitual(key: string): void {
    const rituals = (getDisciplineContent(key)?.rituals ?? []).filter((r) => r.level === 1);
    this.dialogs
      .openPicker({
        title: this.translate.instant('creation.dialog.chooseRitual'),
        items: rituals.map((r) => ({ id: r.name, name: r.name, text: r.text })),
        selectedId: this.state.magicRitual,
      })
      .subscribe((id) => {
        if (id) {
          this.state.magicRitual = id;
        }
      });
  }

  /**
   * Opens the info modal for a discipline. Standard disciplines show their
   * 1-5 powers; path-based disciplines (with `howItWorks`) show only a short
   * rules summary — the sendas (with their levels) live in the senda picker.
   */
  open(key: string): void {
    const content = getDisciplineContent(key);
    let body = this.translate.instant('creationVtm.descriptions.disciplines.' + key);
    if (content?.passive) {
      body = content.passive;
    }

    const levels: InfoDialogLevel[] | undefined = content?.howItWorks
      ? undefined
      : content?.levels?.map((level, i) => ({
          dots: DOTS[i] ?? String(i + 1),
          name: level.name,
          text: level.text,
        }));

    this.dialogs.openInfo({
      title: this.translate.instant('creationVtm.disciplines.' + key),
      body,
      rules: content?.howItWorks,
      levels,
    });
  }

  openPathInfo(path: DisciplinePathInfo): void {
    this.dialogs.openInfo({
      title: path.name,
      body: path.text,
      levels: path.levels.map((l, i) => ({
        dots: DOTS[i] ?? String(i + 1),
        name: l.name,
        text: l.text,
      })),
    });
  }

  openRitualInfo(ritual: DisciplineRitual): void {
    this.dialogs.openInfo({
      title: ritual.name,
      body: `Nivel ${ritual.level}. ${ritual.text}`,
    });
  }
}
