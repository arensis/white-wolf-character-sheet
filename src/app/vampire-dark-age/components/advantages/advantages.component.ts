import { VampireDarkAgesSheet } from 'src/app/vampire-dark-age/model/dark-ages-sheet/vampire-dark-ages/VampireDarkAgesSheet';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'arm-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent {
  @Input()
  characterSheet!: VampireDarkAgesSheet;
}
