import { Component, Input } from '@angular/core';
import { VampireDarkAgesSheet } from 'src/app/vampire-dark-age/model/vampire-dark-ages/VampireDarkAgesSheet';

@Component({
  selector: 'arm-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent {
  @Input()
  characterSheet!: VampireDarkAgesSheet;
}
