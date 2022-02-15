import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'arm-player-data',
  templateUrl: './player-data.component.html',
  styleUrls: ['./player-data.component.scss']
})
export class PlayerDataComponent implements OnInit {
  @Input()
  playerData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
