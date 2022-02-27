import { VampireDarkAgesSheet } from 'src/app/shared/model/vampire-dark-ages/VampireDarkAgesSheet';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'arm-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent {
  @Input()
  characterSheet!: VampireDarkAgesSheet;
}
