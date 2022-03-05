import { Component, Input } from "@angular/core";
import { CharacterSheetStoreService } from "src/app/vampire-dark-age/services/character-sheet-store.service";
import { CustomProperty } from "./CustomProperty";
import { PropertyManagement } from "./PropertyManagement";

@Component({
  template: '',
  selector: 'abstract-custom-property-management'
})
export abstract class CustomPropertyManagement extends PropertyManagement{
  abstract propertyType: string;
  abstract customPropertyType: string;

  constructor(characterSheetStoreService: CharacterSheetStoreService) {
    super(characterSheetStoreService);
  }

  trackByFn(index: number, item: CustomProperty): number {
    return index;
  }

  deleteCustomProperty(index: number): void {
    const routesSegments = [this.propertiesMainPath, this.customPropertyType].join('.').split('.');
    this.characterSheet[routesSegments[0]][routesSegments[1]][routesSegments[2]].splice(index, 1);
  }

  updateValuerFromCustomProperty(value: number, index: number) {
    const routesSegments = [this.propertiesMainPath, this.customPropertyType].join('.').split('.');
    this.characterSheet[routesSegments[0]][routesSegments[1]][routesSegments[2]][index].level = value;
    this.characterSheetStoreService.updateCharacterSheet(this.characterSheet);
  }
}
