import { ChampionsModel } from './../../service/models/champions.model';
import { createAction, props } from '@ngrx/store';

export const loadChampions = createAction(
  '[Champions] Load Championss'
);

export const loadChampionsSuccess = createAction(
  '[Champions] Load Championss Success',
  props<{ data: any }>()
);

export const loadStatus = createAction(
  "[LoadStatus] - Load",
  props<{ load: boolean }>()
);

export const loadChampionssFailure = createAction(
  '[Champions] Load Championss Failure',
  props<{ error: any }>()
);
