import { Component, Input } from '@angular/core';
import { CustomProperties } from 'src/app/shared/components/CustomProperties';
import { DialogService } from 'src/app/shared/services/dialog.service';

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
    this.knowledges.customKnowledges.pop(index);
  }

  trackByFn(item: any, index: number): number {
    return index;
  }
}
