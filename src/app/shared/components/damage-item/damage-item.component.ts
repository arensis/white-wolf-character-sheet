import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DamageType } from '../../model/dark-ages-sheet/advantages/health/DamageType';

@Component({
  selector: 'arm-damage-item',
  templateUrl: './damage-item.component.html',
  styleUrls: ['./damage-item.component.scss']
})
export class DamageItemComponent implements OnChanges {
  @Input()
  name: string = '';
  @Input()
  penalty!: number;
  @Input()
  value: DamageType = DamageType.EMPTY;
  @Output()
  onValueChange = new EventEmitter<DamageType>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('damage value', this.value)
  }

  setDamage(damageType: string) {
    switch(damageType) {
      case 'EMPTY':
        this.onValueChange.emit(DamageType.EMPTY);
        break;
      case 'LETHAL':
        this.onValueChange.emit(DamageType.LETHAL);
        break;
      case 'AGGRAVATED':
        this.onValueChange.emit(DamageType.AGGRAVATED);
        break;
      default:
        this.onValueChange.emit(DamageType.EMPTY);
    }
  }

  isNoDamaged(): boolean {
    return this.value === DamageType.EMPTY.toString();
  }

  isLethalDamage(): boolean {
    return this.value === DamageType.LETHAL.toString();
  }

  isAggravatedDamage(): boolean {
    return this.value === DamageType.AGGRAVATED.toString();
  }
}
