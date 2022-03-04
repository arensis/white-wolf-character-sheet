import { VampireDarkAgesSheet } from 'src/app/vampire-dark-age/model/vampire-dark-ages/VampireDarkAgesSheet';
import { Component, Input } from '@angular/core';
import { CharacterSheetStoreService } from 'src/app/vampire-dark-age/services/character-sheet-store.service';
import { CustomProperty } from 'src/app/shared/model/CustomProperty';

@Component({
  selector: 'arm-backgrounds',
  templateUrl: './backgrounds.component.html',
  styleUrls: ['./backgrounds.component.scss']
})
export class BackgroundsComponent {
  @Input()
  characterSheet: any;

  mierder!: VampireDarkAgesSheet;
  propertyType: string = 'background';
  knowledgesMainPath: string = 'advantages.backgrounds'

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
