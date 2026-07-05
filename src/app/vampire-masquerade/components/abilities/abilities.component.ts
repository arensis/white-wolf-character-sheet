import { Component, Input } from '@angular/core';
import { VampireMasqueradeSheet } from '../../model/masquerade-sheet/vampire-masquerade/VampireMasqueradeSheet';

@Component({
  selector: 'arm-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent {
  @Input()
  characterSheet!: VampireMasqueradeSheet;
}
