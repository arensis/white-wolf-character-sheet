import { VtmCustomPropertyManagement } from 'src/app/vampire-masquerade/shared-base/VtmCustomPropertyManagement';
import { Component } from '@angular/core';
import { VampireMasqueradeSheetStoreService } from 'src/app/vampire-masquerade/services/vampire-masquerade-sheet-store.service';
import { SpecialtyService } from 'src/app/vampire-masquerade/creation/services/specialty.service';
import { AbilityService } from 'src/app/vampire-masquerade/creation/services/ability.service';

@Component({
  selector: 'arm-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.scss']
})
export class TalentsComponent extends VtmCustomPropertyManagement {
  propertyType: string = 'talent';
  customPropertyType: string = 'customTalents';
  propertiesMainPath: string = 'abilities.talents';

  keys: string[] = ['alertness', 'athletics', 'awareness', 'brawl', 'emptahy', 'expression', 'intimidation', 'leadership', 'streetwise', 'subterfuge'];
  labelBase = 'sheet.abilities.talents.';


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
