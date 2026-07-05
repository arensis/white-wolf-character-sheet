import { Component } from '@angular/core';
import { VtmCustomPropertyManagement } from 'src/app/vampire-masquerade/shared-base/VtmCustomPropertyManagement';
import { VampireMasqueradeSheetStoreService } from 'src/app/vampire-masquerade/services/vampire-masquerade-sheet-store.service';
import { DisciplineService } from 'src/app/vampire-masquerade/creation/services/discipline.service';

@Component({
  selector: 'arm-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.scss']
})
export class DisciplinesComponent extends VtmCustomPropertyManagement {
  propertyType: string = 'discipline';
  customPropertyType: string = 'customDisciplines';
  propertiesMainPath: string = 'disciplines';

  readonly disciplineColumns: string[][] = [
    ['animalism', 'auspex', 'celerity', 'chimerstry', 'dementation', 'dominate'],
    ['fortitude', 'necromancy', 'obfuscate', 'obtenebration', 'potence', 'presence'],
    ['protean', 'quietus', 'serpentis', 'thaumaturgy', 'vicissitude'],
  ];

  constructor(
    vampireVTMSheetStoreService: VampireMasqueradeSheetStoreService,
    public discipline: DisciplineService,
  ) {
    super(vampireVTMSheetStoreService);
  }

  labelKey(key: string): string {
    return (key === 'necromancy' || key === 'thaumaturgy')
      ? `sheet.disciplines.${key}.title`
      : `sheet.disciplines.${key}`;
  }

  updateProperty(event: any, propertyName: string): void {
    this.updateValueFromProperty(event, propertyName, this.vampireVTMSheetStoreService.loadVampireVTMSheet);
  }

  updateCheckboxProperty(event: boolean, propertyName: string): void {
    this.updatedCheckboxValueFromProperty(event, propertyName, this.vampireVTMSheetStoreService.loadVampireVTMSheet);
  }
}
