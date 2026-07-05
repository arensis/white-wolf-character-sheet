import { Component } from '@angular/core';
import { CustomPropertyManagement } from 'src/app/shared/components/CustomPropertyManagement';
import { VampireDarkAgesSheetStoreService } from '../../../shared/services/vampire-dark-ages-sheet-store.service';
import { DisciplineService } from '../../creation/services/discipline.service';

@Component({
  selector: 'arm-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.scss']
})
export class DisciplinesComponent extends CustomPropertyManagement {
  propertyType: string = 'discipline';
  customPropertyType: string = 'customDisciplines';
  propertiesMainPath: string = 'disciplines';

  readonly disciplineColumns: string[][] = [
    ['animalism', 'auspex', 'celerity', 'dementation', 'dominate', 'quietus'],
    ['fortitude', 'mortis', 'obtenebration', 'obfuscate', 'potence', 'presence'],
    ['protean', 'chimerstry', 'serpentis', 'thaumaturgy', 'vicissitude'],
  ];

  constructor(
    vampireDASheetStoreService: VampireDarkAgesSheetStoreService,
    public discipline: DisciplineService,
  ) {
    super(vampireDASheetStoreService);
  }

  labelKey(key: string): string {
    return (key === 'mortis' || key === 'thaumaturgy')
      ? `sheet.disciplines.${key}.title`
      : `sheet.disciplines.${key}`;
  }

  updateProperty(event: any, propertyName: string): void {
    this.updateValueFromProperty(event, propertyName, this.vampireDASheetStoreService.loadVampireDASheet);
  }

  updateCheckboxProperty(event: boolean, propertyName: string): void {
    this.updatedCheckboxValueFromProperty(event, propertyName, this.vampireDASheetStoreService.loadVampireDASheet);
  }
}
