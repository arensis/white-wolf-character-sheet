import { Component } from '@angular/core';
import { VtmCustomPropertyManagement } from 'src/app/vampire-masquerade/shared-base/VtmCustomPropertyManagement';
import { VampireMasqueradeSheetStoreService } from 'src/app/vampire-masquerade/services/vampire-masquerade-sheet-store.service';

@Component({
  selector: 'arm-necromancy-rituals',
  templateUrl: './necromancy-rituals.component.html',
  styleUrls: ['./necromancy-rituals.component.scss']
})
export class NecromancyRitualsComponent extends VtmCustomPropertyManagement {
  propertyType: string = 'ritual';
  customPropertyType: string = 'rituals';
  propertiesMainPath: string = 'disciplines.necromancy'

  constructor(vampireVTMSheetStoreService: VampireMasqueradeSheetStoreService) {
    super(vampireVTMSheetStoreService);
    this.valuePropertyName = 'level';
  }

  deleteEntireCustomProperty(index: number) {
    this.deleteCustomProperty(index, this.vampireVTMSheetStoreService.loadVampireVTMSheet);
  }

  updateCustomProperty(event: number, index: number) {
    this.updateValueFromCustomProperty(event, index, this.vampireVTMSheetStoreService.loadVampireVTMSheet);
  }

  get necromancyLevel(): number {
    return this.characterSheet?.disciplines?.necromancy?.level ?? 0;
  }
}
