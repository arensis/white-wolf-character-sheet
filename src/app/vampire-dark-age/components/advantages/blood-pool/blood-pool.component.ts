import { PropertyManagement } from 'src/app/shared/components/PropertyManagement';
import { Component } from '@angular/core';
import { VampireDarkAgesSheetStoreService } from 'src/app/shared/services/vampire-dark-ages-sheet-store.service';

@Component({
  selector: 'arm-blood-pool',
  templateUrl: './blood-pool.component.html',
  styleUrls: ['./blood-pool.component.scss']
})
export class BloodPoolComponent extends PropertyManagement {
  propertiesMainPath: string = 'advantages.bloodPool'

  constructor(vampireDASheetStoreService: VampireDarkAgesSheetStoreService) {
    super(vampireDASheetStoreService);
  }

  updateProperty(event: any, propertyName: string): void {
    this.updateValueFromProperty(event, propertyName, this.vampireDASheetStoreService.loadVampireDASheet);
  }
}
