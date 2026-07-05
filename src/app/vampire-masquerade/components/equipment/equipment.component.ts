import { Component, Input } from '@angular/core';
import { VampireMasqueradeSheet } from '../../model/masquerade-sheet/vampire-masquerade/VampireMasqueradeSheet';

@Component({
  selector: 'arm-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent {
  @Input()
  characterSheet!: VampireMasqueradeSheet;
}
