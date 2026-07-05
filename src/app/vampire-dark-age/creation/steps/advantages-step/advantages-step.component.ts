import { Component } from '@angular/core';
import { LANGUAGE_GROUPS } from '../../data/languages.data';
import { BACKGROUNDS } from '../../data/traits.data';
import { CreationStateService } from '../../services/creation-state.service';
import { DisciplineService } from '../../services/discipline.service';
import { BackgroundService } from '../../services/background.service';

@Component({
  selector: 'arm-advantages-step',
  templateUrl: './advantages-step.component.html',
  styleUrls: ['./advantages-step.component.scss'],
})
export class AdvantagesStepComponent {
  backgrounds = BACKGROUNDS;
  languageGroups = LANGUAGE_GROUPS;

  constructor(
    public state: CreationStateService,
    public discipline: DisciplineService,
    public background: BackgroundService
  ) {}

  /** Virtue field keys paired with the i18n label/info decided by the Road. */
  get virtues(): { key: string; virtueId: string }[] {
    const path = this.state.path;
    return [
      { key: 'conscienceConviction', virtueId: path?.firstVirtue ?? 'conscience' },
      { key: 'selfControlInstint', virtueId: path?.secondVirtue ?? 'selfControl' },
      { key: 'courage', virtueId: 'courage' },
    ];
  }
}
