import { Component, Input } from '@angular/core';
import { CustomProperties } from 'src/app/shared/components/CustomProperties';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'arm-knowledges',
  templateUrl: './knowledges.component.html',
  styleUrls: ['./knowledges.component.scss']
})
export class KnowledgesComponent extends CustomProperties {
  @Input()
  knowledges: any;

  constructor(dialogService: DialogService) {
    super(dialogService);
    this.propertyName = 'Nuevo conocimiento';
  }

  addCustomKnowledge() {
    this.addCustomProperty((name) =>
      this.knowledges.customKnowledges.push({ name: name, level: 0}));
  }

  deleteCustomKnowledge(index: number): void {
    this.knowledges.customKnowledges.pop(index);
  }

  trackByFn(item: any, index: number): number {
    return index;
  }
}
