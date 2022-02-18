import { isNotBlankOrEmpty } from "src/app/utils/stringUtils";
import { DialogService } from "../services/dialog.service";

export class CustomProperties {
  propertyName: string = '';

  constructor(private dialogService: DialogService) {}

  addCustomProperty(callback: (name: string) => void): void {
    this.dialogService.openDialogWithInput(this.propertyName).afterClosed()
      .subscribe(name => {
        if(isNotBlankOrEmpty(name)) {
          callback(name)
        }
      });
  }
}
