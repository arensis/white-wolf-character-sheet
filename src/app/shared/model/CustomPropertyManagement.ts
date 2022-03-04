import { Component, Input } from "@angular/core";
import { CharacterSheetStoreService } from "src/app/vampire-dark-age/services/character-sheet-store.service";
import { CustomProperty } from "./CustomProperty";

@Component({
  template: '',
  selector: 'abstract-custom-property-management'
})
export abstract class CustomPropertyManagement {
  @Input()
  characterSheet: any;

  abstract propertyType: string;
  abstract customPropertyType: string;
  abstract propertiesMainPath: string;

  constructor(private characterSheetStoreService: CharacterSheetStoreService) {
    this.characterSheet = this.characterSheetStoreService.getCharacterSheet();
  }

  trackByFn(index: number, item: CustomProperty): number {
    return index;
  }

  deleteCustomProperty(index: number): void {
    const routesSegments = [this.propertiesMainPath, this.customPropertyType].join('.').split('.');
    this.characterSheet[routesSegments[0]][routesSegments[1]][routesSegments[2]].splice(index, 1);
  }

  updateValueFromProperty(value: number, propertyName: string): void {
    const routesSegments = [this.propertiesMainPath, propertyName].join('.').split('.');
    this.characterSheet[routesSegments[0]][routesSegments[1]][routesSegments[2]] = value;
    this.characterSheetStoreService.updateCharacterSheet(this.characterSheet);
  }

  updateValuerFromCustomProperty(value: number, index: number) {
    const routesSegments = [this.propertiesMainPath, this.customPropertyType].join('.').split('.');
    this.characterSheet[routesSegments[0]][routesSegments[1]][routesSegments[2]][index].level = value;
    this.characterSheetStoreService.updateCharacterSheet(this.characterSheet);
  }
}
