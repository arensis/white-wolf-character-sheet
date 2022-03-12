import { VampireDarkAgesSheet } from '../../../model/dark-ages-sheet/vampire-dark-ages/VampireDarkAgesSheet';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'arm-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  @Input()
  characterSheet!: VampireDarkAgesSheet;
}
