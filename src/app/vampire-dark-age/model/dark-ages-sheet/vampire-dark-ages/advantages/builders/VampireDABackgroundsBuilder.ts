import { BuilderTemplate } from 'src/app/shared/model/builder/BuilderTemplate';
import { CustomProperty } from 'src/app/shared/model/CustomProperty';
import { DarkAgesBackgrounds } from 'src/app/shared/model/dark-ages-sheet/advantages/DarkAgesBackgrounds';

export class VampireDABackgroundsBuilder extends BuilderTemplate<DarkAgesBackgrounds> {
  protected defaultData(): DarkAgesBackgrounds {
    return {
      allies: 0,
      contacts: 0,
      domain: 0,
      generation: 0,
      herd: 0,
      influence: 0,
      mentor: 0,
      resources: 0,
      retainers: 0,
      status: 0,
      customBackgrounds: [] as CustomProperty[]
    } as DarkAgesBackgrounds;
  }

}
