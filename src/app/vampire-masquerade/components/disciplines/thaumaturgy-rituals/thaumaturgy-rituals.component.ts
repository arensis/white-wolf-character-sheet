import { Component } from '@angular/core';
import { VtmCustomPropertyManagement } from 'src/app/vampire-masquerade/shared-base/VtmCustomPropertyManagement';
import { VampireMasqueradeSheetStoreService } from 'src/app/vampire-masquerade/services/vampire-masquerade-sheet-store.service';

@Component({
  selector: 'arm-thaumaturgy-rituals',
  templateUrl: './thaumaturgy-rituals.component.html',
  styleUrls: ['./thaumaturgy-rituals.component.scss']
})
export class ThaumaturgyRitualsComponent extends VtmCustomPropertyManagement{
  propertyType: string = 'ritual';
  customPropertyType: string = 'rituals';
  propertiesMainPath: string = 'disciplines.thaumaturgy'

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

  get thaumaturgyLevel(): number {
    return this.characterSheet?.disciplines?.thaumaturgy?.level ?? 0;
  }
}
