import { Component } from '@angular/core';
import { MAX_ABILITY_IN_CREATION, PRIORITIES, Priority } from '../../data/creation-rules';
import { ABILITY_GROUPS, AbilityGroupId } from '../../data/traits.data';
import { CreationStateService } from '../../services/creation-state.service';

@Component({
  selector: 'arm-abilities-step',
  templateUrl: './abilities-step.component.html',
  styleUrls: ['./abilities-step.component.scss'],
})
export class AbilitiesStepComponent {
  groups = ABILITY_GROUPS;
  priorities = PRIORITIES;
  maxDots = MAX_ABILITY_IN_CREATION;

  constructor(public state: CreationStateService) {}

  setPriority(group: AbilityGroupId, priority: Priority): void {
    this.state.setAbilityPriority(group, priority);
  }
}
