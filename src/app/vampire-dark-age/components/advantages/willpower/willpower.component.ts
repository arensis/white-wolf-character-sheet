import { PropertyManagement } from 'src/app/shared/model/PropertyManagement';
import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'arm-willpower',
  templateUrl: './willpower.component.html',
  styleUrls: ['./willpower.component.scss']
})
export class WillpowerComponent extends PropertyManagement implements OnChanges{
  propertiesMainPath: string = 'advantages.willpower';

  ngOnChanges(changes: SimpleChanges): void {

  }
}
