import { Component, Input } from '@angular/core';
import { VampireMasqueradeSheet } from 'src/app/vampire-masquerade/model/masquerade-sheet/vampire-masquerade/VampireMasqueradeSheet';

@Component({
  selector: 'arm-weakness',
  templateUrl: './weakness.component.html',
  styleUrls: ['./weakness.component.scss']
})
export class WeaknessComponent {
  @Input()
  characterSheet!: VampireMasqueradeSheet;
}
