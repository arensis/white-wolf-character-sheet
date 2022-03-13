import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Abilities } from "src/app/shared/model/sheet/abilities/Abilities";
import { Advantages } from "src/app/shared/model/sheet/advantages/Advantages";
import { Attributes } from "src/app/shared/model/sheet/attributes/Attributes";
import { PlayerData } from "src/app/shared/model/sheet/playerData/PlayerData";
import { Sheet } from "src/app/shared/model/sheet/Sheet";

export const sheetFeatureKey = 'sheet';

export interface SheetState extends Sheet {}

export const adapter: EntityAdapter<SheetState> = createEntityAdapter<SheetState>();

export const initialState: SheetState = adapter.getInitialState({
  playerData: {} as PlayerData,
  attributes: {} as Attributes,
  abilities: {} as Abilities,
  advantages: {} as Advantages,
  isEditable: true
});
