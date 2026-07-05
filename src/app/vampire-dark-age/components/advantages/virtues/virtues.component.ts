import { Component } from '@angular/core';
import { PropertyManagement } from 'src/app/shared/components/PropertyManagement';
import { VampireDarkAgesSheetStoreService } from 'src/app/shared/services/vampire-dark-ages-sheet-store.service';

@Component({
  selector: 'arm-virtues',
  templateUrl: './virtues.component.html',
  styleUrls: ['./virtues.component.scss']
})
export class VirtuesComponent extends PropertyManagement {
  propertiesMainPath: string = 'advantages.virtues'

  constructor(vampireDASheetStoreService: VampireDarkAgesSheetStoreService) {
    super(vampireDASheetStoreService);
  }

  updateProperty(event: any, propertyName: string): void {
    this.updateValueFromProperty(event, propertyName, this.vampireDASheetStoreService.loadVampireDASheet);
  }
}
