
import { Info } from 'src/app/shared/model/sheet/playerData/Info';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireDAInfoBuilder extends BuilderTemplate<Info> {
  protected defaultData(): Info {
    return {
      name: '',
      player: '',
      chronicle: ''
    } as Info;
  }
}
