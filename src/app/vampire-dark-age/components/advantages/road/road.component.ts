import { PropertyManagement } from 'src/app/shared/components/PropertyManagement';
import { Component } from '@angular/core';
import { VampireDarkAgesSheetStoreService } from 'src/app/shared/services/vampire-dark-ages-sheet-store.service';

@Component({
  selector: 'arm-road',
  templateUrl: './road.component.html',
  styleUrls: ['./road.component.scss']
})
export class RoadComponent extends PropertyManagement {
  propertiesMainPath: string = 'advantages.road'

  constructor(vampireDASheetStoreService: VampireDarkAgesSheetStoreService) {
    super(vampireDASheetStoreService);
  }

  updateProperty(event: any, propertyName: string): void {
    this.updateValueFromProperty(event, propertyName, this.vampireDASheetStoreService.loadVampireDASheet);
  }
}
