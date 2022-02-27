import { Component, Input } from '@angular/core';
import { CustomProperty } from 'src/app/shared/model/vampire-dark-ages/CustomProperty';
import { CharacterSheetStoreService } from 'src/app/vampire-dark-age/services/character-sheet-store.service';

@Component({
  selector: 'arm-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @Input()
  characterSheet: any;

  propertyType: string = 'técnica';
  skillsMainPath: string = 'abilities.skills';

  constructor(private characterSheetStoreService: CharacterSheetStoreService) {
    this.characterSheet = this.characterSheetStoreService.getCharacterSheet();
  }

  deleteCustomSkill(index: number): void {
    this.characterSheet.abilities.skills.customSkills.splice(index, 1);
  }

  trackByFn(index: number, item: CustomProperty): number {
    return index;
  }

  updateValueFromProperty(value: number, propertyName: string): void {
    const routesSegments = [this.skillsMainPath, propertyName].join('.').split('.');
    this.characterSheet[routesSegments[0]][routesSegments[1]][routesSegments[2]] = value;
    this.characterSheetStoreService.updateCharacterSheet(this.characterSheet);
  }

  updateValuerFromCustomProperty(value: number, index: number) {
    const routesSegments = [this.skillsMainPath, 'customSkills'].join('.').split('.');
    this.characterSheet[routesSegments[0]][routesSegments[1]][routesSegments[2]][index].level = value;
    this.characterSheetStoreService.updateCharacterSheet(this.characterSheet);
  }
}
