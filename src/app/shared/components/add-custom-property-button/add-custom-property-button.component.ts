import { TranslateService } from '@ngx-translate/core';
import { Component, Input } from '@angular/core';
import { isNotBlankOrEmpty } from 'src/app/utils/stringUtils';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'arm-add-custom-property-button',
  templateUrl: './add-custom-property-button.component.html',
  styleUrls: ['./add-custom-property-button.component.scss']
})
export class AddCustomPropertyButtonComponent {
  @Input()
  customPropertyList: any[] = [];
  @Input()
  propertyType: string = '';
  @Input()
  isEditable: boolean = true;

  constructor(private dialogService: DialogService, private translate: TranslateService) {}

  addCustomProperty(): void {
    if (this.isEditable) {
      this.dialogService.openDialogWithInput(this.propertyType).afterClosed()
      .subscribe(name => {
        if(isNotBlankOrEmpty(name)) {
          this.customPropertyList.push({ name: name, level: 0 })
        }
      });
    }
  }
}
