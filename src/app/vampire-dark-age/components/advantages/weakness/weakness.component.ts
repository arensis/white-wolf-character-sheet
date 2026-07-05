import { Component, Input } from '@angular/core';
import { VampireDarkAgesSheet } from 'src/app/vampire-dark-age/model/dark-ages-sheet/vampire-dark-ages/VampireDarkAgesSheet';

@Component({
  selector: 'arm-weakness',
  templateUrl: './weakness.component.html',
  styleUrls: ['./weakness.component.scss']
})
export class WeaknessComponent {
  @Input()
  characterSheet!: VampireDarkAgesSheet;
}
