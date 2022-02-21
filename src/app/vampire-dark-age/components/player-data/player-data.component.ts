import { PlayerData } from './../../../shared/model/vampire-dark-ages/player-data/PlayerData';
import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { VampireDarkAgesSheet } from 'src/app/shared/model/vampire-dark-ages/VampireDarkAgesSheet';
import { CharacterSheetStoreService } from '../../services/character-sheet-store.service';

@Component({
  selector: 'arm-player-data',
  templateUrl: './player-data.component.html',
  styleUrls: ['./player-data.component.scss']
})
export class PlayerDataComponent {
  @Input()
  characterSheet: any;

  constructor(private characterSheetStoreService: CharacterSheetStoreService) {
    this.characterSheet = this.characterSheetStoreService.getCharacterSheet();
  }

  updateValueFromProperty(event: any, routePath: string) {
    //TODO: Alternativa con store
    const routeSegments = routePath.split('.');
    this.characterSheet[routeSegments[0]][routeSegments[1]][routeSegments[2]] = event.target.value;
    this.characterSheetStoreService.updateCharacterSheet(this.characterSheet);
  }
}
