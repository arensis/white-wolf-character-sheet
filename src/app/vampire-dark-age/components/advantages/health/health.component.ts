import { PropertyManagement } from 'src/app/shared/model/PropertyManagement';
import { Component } from '@angular/core';

@Component({
  selector: 'arm-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent extends PropertyManagement{
  propertiesMainPath: string = 'advantages.health'
}
