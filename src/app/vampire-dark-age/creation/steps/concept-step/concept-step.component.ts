import { Component } from '@angular/core';
import { ARCHETYPES } from '../../data/archetypes.data';
import { CLANS } from '../../data/clans.data';
import { PATHS } from '../../data/paths.data';
import { getRoadContent, RoadContent } from '../../data/roads-content.data';
import { CreationStateService } from '../../services/creation-state.service';
import { DisciplineService } from '../../services/discipline.service';

@Component({
  selector: 'arm-concept-step',
  templateUrl: './concept-step.component.html',
  styleUrls: ['./concept-step.component.scss'],
})
export class ConceptStepComponent {
  highClans = CLANS.filter((c) => c.type === 'high');
  lowClans = CLANS.filter((c) => c.type === 'low');
  caitiff = CLANS.find((c) => c.type === 'caitiff')!;
  paths = PATHS;
  archetypes = ARCHETYPES;

  constructor(
    public state: CreationStateService,
    public discipline: DisciplineService
  ) {}

  selectClan(id: string): void {
    this.state.selectClan(id);
  }

  get roadContent(): RoadContent | undefined {
    return this.state.pathId ? getRoadContent(this.state.pathId) : undefined;
  }

  /** Whether the selected clan recommends the given road (a suggestion). */
  isRecommendedRoad(roadId: string): boolean {
    return (this.state.clan?.recommendedRoads ?? []).includes(roadId);
  }
}
