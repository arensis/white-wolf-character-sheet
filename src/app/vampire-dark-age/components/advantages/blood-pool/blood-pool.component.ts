import { PropertyManagement } from 'src/app/shared/model/PropertyManagement';
import { VampireDarkAgesSheet } from './../../../model/vampire-dark-ages/VampireDarkAgesSheet';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'arm-blood-pool',
  templateUrl: './blood-pool.component.html',
  styleUrls: ['./blood-pool.component.scss']
})
export class BloodPoolComponent extends PropertyManagement {
  propertiesMainPath: string = 'advantages.bloodPool'
}
