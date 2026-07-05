import { Component, Input } from '@angular/core';
import { CreationDialogService } from '../../services/creation-dialog.service';

/**
 * Small "(i)" button that opens an information modal. Using a dialog (instead
 * of an inline popover) keeps long text on-screen on every viewport size.
 */
@Component({
  selector: 'arm-info-icon',
  templateUrl: './info-icon.component.html',
  styleUrls: ['./info-icon.component.scss'],
})
export class InfoIconComponent {
  @Input() heading = '';
  @Input() text = '';

  constructor(private dialogs: CreationDialogService) {}

  open(event: MouseEvent): void {
    event.stopPropagation();
    this.dialogs.openInfo({ title: this.heading, body: this.text });
  }
}
