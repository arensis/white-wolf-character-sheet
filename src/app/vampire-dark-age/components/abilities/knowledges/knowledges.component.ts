import { Component, Input } from '@angular/core';

@Component({
  selector: 'arm-knowledges',
  templateUrl: './knowledges.component.html',
  styleUrls: ['./knowledges.component.scss']
})
export class KnowledgesComponent {
  @Input()
  knowledges: any;

  propertyType: string;

  constructor() {
    this.propertyType = 'conocimiento';
  }

  deleteCustomKnowledge(index: number): void {
    this.knowledges.customKnowledges.splice(index, 1);
  }

  trackByFn(item: any, index: number): number {
    return index;
  }
}
