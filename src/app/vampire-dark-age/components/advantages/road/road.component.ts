import { PropertyManagement } from 'src/app/shared/components/PropertyManagement';
import { Component } from '@angular/core';
import { CharacterSheetStoreService } from 'src/app/vampire-dark-age/services/character-sheet-store.service';

@Component({
  selector: 'arm-road',
  templateUrl: './road.component.html',
  styleUrls: ['./road.component.scss']
})
export class RoadComponent extends PropertyManagement {
  propertiesMainPath: string = 'advantages.road'

  constructor(characterSheetStoreService: CharacterSheetStoreService) {
    super(characterSheetStoreService);
  }
}
