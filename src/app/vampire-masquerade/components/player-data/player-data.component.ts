import { VampireMasqueradeSheetStoreService } from 'src/app/vampire-masquerade/services/vampire-masquerade-sheet-store.service';
import { Component, Input, OnInit } from '@angular/core';
import { ClanService } from 'src/app/vampire-masquerade/creation/services/clan.service';
import { SectService } from 'src/app/vampire-masquerade/creation/services/sect.service';
import { ArchetypeService } from 'src/app/vampire-masquerade/creation/services/archetype.service';
import * as _ from 'lodash';

@Component({
  selector: 'arm-player-data',
  templateUrl: './player-data.component.html',
  styleUrls: ['./player-data.component.scss']
})
export class PlayerDataComponent implements OnInit {
  @Input()
  characterSheet: any;

  backgroundPath: string = 'playerData.background';
  infoPath: string = 'playerData.info';
  conceptPath: string = 'playerData.concept';

  constructor(
    private sheetStore: VampireMasqueradeSheetStoreService,
    public clanInfo: ClanService,
    public sectInfo: SectService,
    public archetypeInfo: ArchetypeService,
  ) {}

  ngOnInit(): void {
    this.sheetStore.selectVampireVTMSheet().subscribe(sheet => {
      this.characterSheet = sheet;
    })
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
    let characterSheet = _.cloneDeep(this.characterSheet);
    _.set(characterSheet, routePath, event);

    this.sheetStore.loadVampireVTMSheet(characterSheet);
  }
}
