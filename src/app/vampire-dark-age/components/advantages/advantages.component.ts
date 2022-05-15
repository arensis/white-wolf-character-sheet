import { Component, Input } from '@angular/core';
import { VampireDarkAgesSheet } from '../../model/dark-ages-sheet/vampire-dark-ages/VampireDarkAgesSheet';

@Component({
  selector: 'arm-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent {
  @Input()
  characterSheet!: VampireDarkAgesSheet;
}
