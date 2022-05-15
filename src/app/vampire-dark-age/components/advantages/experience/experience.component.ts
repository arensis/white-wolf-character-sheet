import { Component, Input } from '@angular/core';
import { VampireDarkAgesSheet } from 'src/app/vampire-dark-age/model/dark-ages-sheet/vampire-dark-ages/VampireDarkAgesSheet';

@Component({
  selector: 'arm-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  @Input()
  characterSheet!: VampireDarkAgesSheet;
}
