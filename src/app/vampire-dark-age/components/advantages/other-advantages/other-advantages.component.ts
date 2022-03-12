import { Component, Input } from '@angular/core';
import { VampireDarkAgesSheet } from 'src/app/vampire-dark-age/model/dark-ages-sheet/vampire-dark-ages/VampireDarkAgesSheet';

@Component({
  selector: 'arm-other-advantages',
  templateUrl: './other-advantages.component.html',
  styleUrls: ['./other-advantages.component.scss']
})
export class OtherAdvantagesComponent {
  @Input()
  characterSheet!: VampireDarkAgesSheet;
}
