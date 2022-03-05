import { Component, Input } from "@angular/core";
import { CharacterSheetStoreService } from "src/app/vampire-dark-age/services/character-sheet-store.service";

@Component({
  template: '',
  selector: 'abstract-property-management'
})
export abstract class PropertyManagement {
  @Input()
  characterSheet: any;

  abstract propertiesMainPath: string;

  constructor(protected characterSheetStoreService: CharacterSheetStoreService) {
    this.characterSheet = this.characterSheetStoreService.getCharacterSheet();
  }

  updateValueFromProperty(value: number, propertyName: string): void {
    const routesSegments = [this.propertiesMainPath, propertyName].join('.').split('.');
    this.characterSheet[routesSegments[0]][routesSegments[1]][routesSegments[2]] = value;
    this.characterSheetStoreService.updateCharacterSheet(this.characterSheet);
  }
}
