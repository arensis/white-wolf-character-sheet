import { PropertyManagement } from 'src/app/shared/components/PropertyManagement';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { VampireDarkAgesSheetStoreService } from 'src/app/shared/services/vampire-dark-ages-sheet-store.service';

@Component({
  selector: 'arm-willpower',
  templateUrl: './willpower.component.html',
  styleUrls: ['./willpower.component.scss']
})
export class WillpowerComponent extends PropertyManagement {
  propertiesMainPath: string = 'advantages.willpower';

  constructor(vampireDASheetStoreService: VampireDarkAgesSheetStoreService) {
    super(vampireDASheetStoreService)
  }

  updateProperty(event: any, propertyName: string): void {
    this.updateValueFromProperty(event, propertyName, this.vampireDASheetStoreService.loadVampireDASheet);
  }
}
