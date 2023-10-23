import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { AsmResultModel } from '../../../models/asm-result.model';

export const corewarStoreFeatureKey = 'corewarStore';

export interface State {
  players: AsmResultModel[]
}

const initialState: State = {
  players: []
}

export const reducers: ActionReducerMap<State> = {
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
