import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DarkAgesDamageType } from '../../model/dark-ages-sheet/advantages/health/DarkAgesDamageType';

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
  value: DarkAgesDamageType = DarkAgesDamageType.EMPTY;
  @Output()
  onValueChange = new EventEmitter<DarkAgesDamageType>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('damage value', this.value)
  }

  setDamage(damageType: string) {
    switch(damageType) {
      case 'EMPTY':
        this.onValueChange.emit(DarkAgesDamageType.EMPTY);
        break;
      case 'LETHAL':
        this.onValueChange.emit(DarkAgesDamageType.LETHAL);
        break;
      case 'AGGRAVATED':
        this.onValueChange.emit(DarkAgesDamageType.AGGRAVATED);
        break;
      default:
        this.onValueChange.emit(DarkAgesDamageType.EMPTY);
    }
  }

  isNoDamaged(): boolean {
    return this.value === DarkAgesDamageType.EMPTY.toString();
  }

  isLethalDamage(): boolean {
    return this.value === DarkAgesDamageType.LETHAL.toString();
  }

  isAggravatedDamage(): boolean {
    return this.value === DarkAgesDamageType.AGGRAVATED.toString();
  }
}
