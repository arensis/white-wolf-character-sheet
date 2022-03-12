import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";

export const sheetFeatureKey = 'sheet';

export interface SheetState {}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>();

export const initialState: SheetState = adapter.getInitialState({});
