import { VtmCustomPropertyManagement } from 'src/app/vampire-masquerade/shared-base/VtmCustomPropertyManagement';
import { Component } from '@angular/core';
import { VampireMasqueradeSheetStoreService } from 'src/app/vampire-masquerade/services/vampire-masquerade-sheet-store.service';
import { SpecialtyService } from 'src/app/vampire-masquerade/creation/services/specialty.service';
import { AbilityService } from 'src/app/vampire-masquerade/creation/services/ability.service';

@Component({
  selector: 'arm-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent extends VtmCustomPropertyManagement {
  propertyType: string = 'skill';
  customPropertyType: string = 'customSkills';
  propertiesMainPath: string = 'abilities.skills';

  keys: string[] = ['animalKen', 'crafts', 'drive', 'etiquette', 'firearms', 'larceny', 'melee', 'performance', 'stealth', 'survival'];
  labelBase = 'sheet.abilities.skills.';

  constructor(
    vampireVTMSheetStoreService: VampireMasqueradeSheetStoreService,
    public specialty: SpecialtyService,
    public ability: AbilityService
  ) {
    super(vampireVTMSheetStoreService);
    this.valuePropertyName = 'level';
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
