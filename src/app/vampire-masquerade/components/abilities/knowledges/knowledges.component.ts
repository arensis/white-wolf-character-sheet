
import { Component } from '@angular/core';
import { VtmCustomPropertyManagement } from 'src/app/vampire-masquerade/shared-base/VtmCustomPropertyManagement';
import { VampireMasqueradeSheetStoreService } from 'src/app/vampire-masquerade/services/vampire-masquerade-sheet-store.service';
import { SpecialtyService } from 'src/app/vampire-masquerade/creation/services/specialty.service';
import { AbilityService } from 'src/app/vampire-masquerade/creation/services/ability.service';

@Component({
  selector: 'arm-knowledges',
  templateUrl: './knowledges.component.html',
  styleUrls: ['./knowledges.component.scss']
})
export class KnowledgesComponent extends VtmCustomPropertyManagement {
  propertyType: string = 'knowledge';
  customPropertyType: string = 'customKnowledges'
  propertiesMainPath: string = 'abilities.knowledges';

  keys: string[] = ['academics', 'computer', 'finance', 'investigation', 'law', 'medicine', 'occult', 'politics', 'science', 'technology'];
  labelBase = 'sheet.abilities.knowledges.';


  constructor(
    vampireVTMSheetStoreService: VampireMasqueradeSheetStoreService,
    public specialty: SpecialtyService,
    public ability: AbilityService
  ) {
    super(vampireVTMSheetStoreService);
    this.valuePropertyName = 'level'
  }

  updateProperty(event: any, propertyName: string): void {
    this.updateValueFromProperty(event, propertyName, this.vampireVTMSheetStoreService.loadVampireVTMSheet);
  }

  deleteEntireCustomProperty(index: number) {
    this.deleteCustomProperty(index, this.vampireVTMSheetStoreService.loadVampireVTMSheet);
  }

  updateCustomProperty(event: number, index: number) {
    this.updateValueFromCustomProperty(event, index, this.vampireVTMSheetStoreService.loadVampireVTMSheet);
  }

  updateCheckCustomProperty(event: boolean, index: number) {
    this.updateCheckboxValueFromCustomProperty(event, index, this.vampireVTMSheetStoreService.loadVampireVTMSheet);
  }
}
