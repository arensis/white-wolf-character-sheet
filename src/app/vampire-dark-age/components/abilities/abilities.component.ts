import { Component, Input } from '@angular/core';
import { VampireDarkAgesSheet } from '../../model/dark-ages-sheet/vampire-dark-ages/VampireDarkAgesSheet';

@Component({
  selector: 'arm-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent {
  @Input()
  characterSheet!: VampireDarkAgesSheet;
}
