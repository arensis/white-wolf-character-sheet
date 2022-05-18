import { VampireDarkAgesSheetStoreService } from './../../../shared/services/vampire-dark-ages-sheet-store.service';
import { Component, Input, OnInit } from '@angular/core';

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

  constructor(private sheetStore: VampireDarkAgesSheetStoreService) {}

  ngOnInit(): void {
    this.sheetStore.selectVampireDASheet().subscribe(sheet => {
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
    const routeSegments = routePath.split('.');
    this.characterSheet[routeSegments[0]][routeSegments[1]][routeSegments[2]] = event;
    this.sheetStore.loadVampireDASheet(this.characterSheet);
  }
}
