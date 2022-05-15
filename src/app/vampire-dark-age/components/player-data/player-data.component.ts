import { Component, Input } from '@angular/core';
import { CharacterSheetStoreService } from '../../services/character-sheet-store.service';

@Component({
  selector: 'arm-player-data',
  templateUrl: './player-data.component.html',
  styleUrls: ['./player-data.component.scss']
})
export class PlayerDataComponent {
  @Input()
  characterSheet: any;

  backgroundPath: string = 'playerData.background';
  infoPath: string = 'playerData.info';
  conceptPath: string = 'playerData.concept';

  constructor(private characterSheetStoreService: CharacterSheetStoreService) {
    this.characterSheet = this.characterSheetStoreService.getCharacterSheet();
  }

  updateBackgroundProperty(event: any, propertyName: string): void {
    const propertyPath = [this.backgroundPath, propertyName].join('.');
    this.updateValueFromProperty(event, propertyPath);
  }

  updateConceptProperty(event: any, propertyName: string): void {
    const propertyPath = [this.conceptPath, propertyName].join('.');
    this.updateValueFromProperty(event, propertyPath);
  }

  updateInfoProperty(event: any, propertyName: string): void {
    const propertyPath = [this.infoPath, propertyName].join('.');
    this.updateValueFromProperty(event, propertyPath);
  }

  private updateValueFromProperty(event: any, routePath: string) {
    const routeSegments = routePath.split('.');
    this.characterSheet[routeSegments[0]][routeSegments[1]][routeSegments[2]] = event;
    this.characterSheetStoreService.updateCharacterSheet(this.characterSheet);
  }
}
