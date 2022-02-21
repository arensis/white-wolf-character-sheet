import { CustomProperty } from './../../../../shared/model/vampire-dark-ages/CustomProperty';
import { Knowledges } from './../../../../shared/model/vampire-dark-ages/abilities/Knowledges';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'arm-knowledges',
  templateUrl: './knowledges.component.html',
  styleUrls: ['./knowledges.component.scss']
})
export class KnowledgesComponent {
  @Input()
  knowledges: Knowledges;

  @Output()
  knowledgesChange = new EventEmitter<Knowledges>();

  propertyType: string;

  constructor() {
    this.propertyType = 'conocimiento';
    this.knowledges = {} as Knowledges;
  }

  deleteCustomKnowledge(index: number): void {
    this.knowledges.customKnowledges.splice(index, 1);
  }

  trackByFn(index: number, item: CustomProperty): number {
    return index;
  }
}
