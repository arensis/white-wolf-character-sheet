import { Component, OnInit } from '@angular/core';
import { FREEBIE_COSTS } from '../../data/creation-rules';
import { LANGUAGE_GROUPS } from '../../data/languages.data';
import {
  ABILITY_GROUPS,
  ATTRIBUTE_GROUPS,
  BACKGROUNDS,
} from '../../data/traits.data';
import {
  MERIT_FLAW_CATEGORIES,
  MERITS_FLAWS,
  MeritFlawCategoryInfo,
  MeritFlawEntry,
} from '../../data/merits-flaws.data';
import { CreationStateService } from '../../services/creation-state.service';
import { SpecialtyService } from '../../services/specialty.service';

@Component({
  selector: 'arm-finishing-step',
  templateUrl: './finishing-step.component.html',
  styleUrls: ['./finishing-step.component.scss'],
})
export class FinishingStepComponent implements OnInit {
  attributeGroups = ATTRIBUTE_GROUPS;
  abilityGroups = ABILITY_GROUPS;
  backgrounds = BACKGROUNDS;
  costs = FREEBIE_COSTS;
  meritFlawCategories: MeritFlawCategoryInfo[] = MERIT_FLAW_CATEGORIES;
  languageGroups = LANGUAGE_GROUPS;

  constructor(
    public state: CreationStateService,
    public specialty: SpecialtyService
  ) {}

  ngOnInit(): void {
    this.state.beginFreebies();
  }

  get virtues(): { key: string; virtueId: string }[] {
    const path = this.state.path;
    return [
      { key: 'conscienceConviction', virtueId: path?.firstVirtue ?? 'conscience' },
      { key: 'selfControlInstint', virtueId: path?.secondVirtue ?? 'selfControl' },
      { key: 'courage', virtueId: 'courage' },
    ];
  }

  entriesByCategory(category: string): MeritFlawEntry[] {
    return MERITS_FLAWS.filter((e) => e.category === category);
  }

  meritCostLabel(entry: MeritFlawEntry): string {
    return entry.type === 'merit' ? `−${entry.cost}` : `+${entry.cost}`;
  }
}
