import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { CustomProperty } from '../CustomProperty';

export class CustomPropertyBuilder extends BuilderTemplate<CustomProperty> {
  protected defaultData(): CustomProperty {
    return {
      name: '',
      level: 0
    } as CustomProperty;
  }

}
