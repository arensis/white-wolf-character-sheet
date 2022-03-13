import { Component } from '@angular/core';
import { PropertyManagement } from 'src/app/shared/components/PropertyManagement';
import { CharacterSheetStoreService } from 'src/app/vampire-dark-age/services/character-sheet-store.service';

@Component({
  selector: 'arm-virtues',
  templateUrl: './virtues.component.html',
  styleUrls: ['./virtues.component.scss']
})
export class VirtuesComponent extends PropertyManagement {
  propertiesMainPath: string = 'advantages.virtues'

  constructor(characterSheetStoreService: CharacterSheetStoreService) {
    super(characterSheetStoreService);
  }
}
