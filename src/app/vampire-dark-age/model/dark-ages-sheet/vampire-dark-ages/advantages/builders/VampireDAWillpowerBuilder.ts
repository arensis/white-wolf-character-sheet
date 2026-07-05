import { Willpower } from './../../../../../../shared/model/sheet/advantages/Willpower';
import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';

export class VampireDAWillpowerBuilder extends BuilderTemplate<Willpower> {
  protected defaultData(): Willpower {
    return {
      permanent: 0,
      temporal: 0
    } as Willpower;
  }

}
