import { Component, Input } from '@angular/core';
import { VampireDarkAgesSheet } from '../../model/vampire-dark-ages/VampireDarkAgesSheet';

@Component({
  selector: 'arm-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  @Input()
  characterSheet!: VampireDarkAgesSheet;
}
