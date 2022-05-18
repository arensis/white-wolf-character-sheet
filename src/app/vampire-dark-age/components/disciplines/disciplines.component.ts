import { Component } from '@angular/core';
import { CustomPropertyManagement } from 'src/app/shared/components/CustomPropertyManagement';
import { VampireDarkAgesSheetStoreService } from '../../../shared/services/vampire-dark-ages-sheet-store.service';

@Component({
  selector: 'arm-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.scss']
})
export class DisciplinesComponent extends CustomPropertyManagement {
  propertyType: string = 'discipline';
  customPropertyType: string = 'customDisciplines'
  propertiesMainPath: string = 'disciplines';

  constructor(vampireDASheetStoreService: VampireDarkAgesSheetStoreService) {
    super(vampireDASheetStoreService);
  }

  updateProperty(event: any, propertyName: string): void {
    this.updateValueFromProperty(event, propertyName, this.vampireDASheetStoreService.loadVampireDASheet);
  }

  updateCheckboxProperty(event: boolean, propertyName: string): void {
    this.updatedCheckboxValueFromProperty(event, propertyName, this.vampireDASheetStoreService.loadVampireDASheet);
  }
}
