import { CustomProperty } from './../../../../shared/model/vampire-dark-ages/CustomProperty';
import { Component, Input } from '@angular/core';
import { CharacterSheetStoreService } from 'src/app/vampire-dark-age/services/character-sheet-store.service';

@Component({
  selector: 'arm-knowledges',
  templateUrl: './knowledges.component.html',
  styleUrls: ['./knowledges.component.scss']
})
export class KnowledgesComponent {
  @Input()
  characterSheet: any;

  propertyType: string = 'knowledge';
  knowledgesMainPath: string = 'abilities.knowledges';

  constructor(private characterSheetStoreService: CharacterSheetStoreService) {
    this.characterSheet = this.characterSheetStoreService.getCharacterSheet();
  }

  deleteCustomKnowledge(index: number): void {
    this.characterSheet.abilities.knowledges.customKnowledges.splice(index, 1);
  }

  trackByFn(index: number, item: CustomProperty): number {
    return index;
  }

  updateValueFromProperty(value: number, propertyName: string): void {
    const routesSegments = [this.knowledgesMainPath, propertyName].join('.').split('.');
    this.characterSheet[routesSegments[0]][routesSegments[1]][routesSegments[2]] = value;
    this.characterSheetStoreService.updateCharacterSheet(this.characterSheet);
  }

  updateValuerFromCustomProperty(value: number, index: number) {
    const routesSegments = [this.knowledgesMainPath, 'customKnowledges'].join('.').split('.');
    this.characterSheet[routesSegments[0]][routesSegments[1]][routesSegments[2]][index].level = value;
    this.characterSheetStoreService.updateCharacterSheet(this.characterSheet);
  }
}
