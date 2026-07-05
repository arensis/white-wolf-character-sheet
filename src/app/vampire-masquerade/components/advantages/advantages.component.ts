import { Component, Input } from '@angular/core';
import { VampireMasqueradeSheet } from '../../model/masquerade-sheet/vampire-masquerade/VampireMasqueradeSheet';

@Component({
  selector: 'arm-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent {
  @Input()
  characterSheet!: VampireMasqueradeSheet;
}
