import { PropertyManagement } from 'src/app/shared/components/PropertyManagement';
import { Component } from '@angular/core';

@Component({
  selector: 'arm-blood-pool',
  templateUrl: './blood-pool.component.html',
  styleUrls: ['./blood-pool.component.scss']
})
export class BloodPoolComponent extends PropertyManagement {
  propertiesMainPath: string = 'advantages.bloodPool'
}
