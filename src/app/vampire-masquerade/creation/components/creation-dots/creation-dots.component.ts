import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * A fully controlled row of dots. Unlike the shared CircleInput it keeps no
 * internal state: it renders exactly the `value` it is given and only emits
 * the value the user *intends*, leaving the parent (and the strict point
 * counters) the final say on whether to accept it.
 */
@Component({
  selector: 'arm-creation-dots',
  templateUrl: './creation-dots.component.html',
  styleUrls: ['./creation-dots.component.scss'],
})
export class CreationDotsComponent {
  @Input() value = 0;
  @Input() max = 5;
  @Input() disabled = false;
  /**
   * Dots at this index or above (when filled) render with the "freebie"
   * accent, so freebie-bought dots are visible at a glance. -1 disables it.
   */
  @Input() highlightFrom = -1;

  @Output() valueChange = new EventEmitter<number>();

  isFreebie(index: number): boolean {
    return this.highlightFrom >= 0 && index >= this.highlightFrom && index < this.value;
  }

  get dots(): number[] {
    return Array.from({ length: this.max }, (_, i) => i);
  }

  onClick(index: number): void {
    if (this.disabled) {
      return;
    }
    // Clicking the top filled dot lowers by one; otherwise fill up to it.
    const desired = index + 1 === this.value ? index : index + 1;
    this.valueChange.emit(desired);
  }
}
