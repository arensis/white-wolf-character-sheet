import { Component } from '@angular/core';
import { PRIORITIES, Priority } from '../../data/creation-rules';
import { ATTRIBUTE_GROUPS, AttributeGroupId } from '../../data/traits.data';
import { CreationStateService } from '../../services/creation-state.service';

@Component({
  selector: 'arm-attributes-step',
  templateUrl: './attributes-step.component.html',
  styleUrls: ['./attributes-step.component.scss'],
})
export class AttributesStepComponent {
  groups = ATTRIBUTE_GROUPS;
  priorities = PRIORITIES;

  constructor(public state: CreationStateService) {}

  setPriority(group: AttributeGroupId, priority: Priority): void {
    this.state.setAttributePriority(group, priority);
  }
}
