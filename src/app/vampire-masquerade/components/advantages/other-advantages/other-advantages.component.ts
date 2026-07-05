import { Component, Input } from '@angular/core';
import { VampireMasqueradeSheet } from 'src/app/vampire-masquerade/model/masquerade-sheet/vampire-masquerade/VampireMasqueradeSheet';

@Component({
  selector: 'arm-other-advantages',
  templateUrl: './other-advantages.component.html',
  styleUrls: ['./other-advantages.component.scss']
})
export class OtherAdvantagesComponent {
  @Input()
  characterSheet!: VampireMasqueradeSheet;
}
