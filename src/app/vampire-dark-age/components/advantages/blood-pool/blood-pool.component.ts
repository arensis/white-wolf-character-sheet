import { VampireDarkAgesSheet } from './../../../model/vampire-dark-ages/VampireDarkAgesSheet';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'arm-blood-pool',
  templateUrl: './blood-pool.component.html',
  styleUrls: ['./blood-pool.component.scss']
})
export class BloodPoolComponent {
  @Input()
  characterSheet!: VampireDarkAgesSheet;
}
