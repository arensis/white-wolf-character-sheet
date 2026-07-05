import { Component, Input } from '@angular/core';
import { VampireDarkAgesSheet } from '../../model/dark-ages-sheet/vampire-dark-ages/VampireDarkAgesSheet';

@Component({
  selector: 'arm-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent {
  @Input()
  characterSheet!: VampireDarkAgesSheet;
}
