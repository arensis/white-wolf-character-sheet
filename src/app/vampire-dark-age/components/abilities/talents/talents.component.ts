import { CustomPropertyManagement } from 'src/app/shared/components/CustomPropertyManagement';
import { Component } from '@angular/core';
import { VampireDarkAgesSheetStoreService } from 'src/app/shared/services/vampire-dark-ages-sheet-store.service';
import { SpecialtyService } from '../../../creation/services/specialty.service';

@Component({
  selector: 'arm-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.scss']
})
export class TalentsComponent extends CustomPropertyManagement {
  propertyType: string = 'talent';
  customPropertyType: string = 'customTalents';
  propertiesMainPath: string = 'abilities.talents';


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
