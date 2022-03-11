import { PropertyManagement } from 'src/app/shared/model/PropertyManagement';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { VampireDarkAgesSheet } from 'src/app/vampire-dark-age/model/vampire-dark-ages/VampireDarkAgesSheet';

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
