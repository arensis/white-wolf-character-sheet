
import { Component } from '@angular/core';
import { CustomPropertyManagement } from 'src/app/shared/components/CustomPropertyManagement';
import { VampireDarkAgesSheetStoreService } from 'src/app/shared/services/vampire-dark-ages-sheet-store.service';
import { SpecialtyService } from '../../../creation/services/specialty.service';

@Component({
  selector: 'arm-knowledges',
  templateUrl: './knowledges.component.html',
  styleUrls: ['./knowledges.component.scss']
})
export class KnowledgesComponent extends CustomPropertyManagement {
  propertyType: string = 'knowledge';
  customPropertyType: string = 'customKnowledges'
  propertiesMainPath: string = 'abilities.knowledges';


  constructor(
    vampireDASheetStoreService: VampireDarkAgesSheetStoreService,
    public specialty: SpecialtyService
  ) {
    super(vampireDASheetStoreService);
    this.valuePropertyName = 'level'
  }

  updateProperty(event: any, propertyName: string): void {
    this.updateValueFromProperty(event, propertyName, this.vampireDASheetStoreService.loadVampireDASheet);
  }

  deleteEntireCustomProperty(index: number) {
    this.deleteCustomProperty(index, this.vampireDASheetStoreService.loadVampireDASheet);
  }

  updateCustomProperty(event: number, index: number) {
    this.updateValueFromCustomProperty(event, index, this.vampireDASheetStoreService.loadVampireDASheet);
  }

  updateCheckCustomProperty(event: boolean, index: number) {
    this.updateCheckboxValueFromCustomProperty(event, index, this.vampireDASheetStoreService.loadVampireDASheet);
  }
}
