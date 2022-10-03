import { createAction, props } from '@ngrx/store';
import { RankUserModel } from 'src/app/service/models/rankUser.model';

export const yPlayerSearchs = createAction(
  '[PlayerSearch] Y PlayerSearchs', props<{ playerSearchs: string }>()
);

export const yPlayerSearchsSuccess = createAction(
  '[PlayerSearch] Y PlayerSearchs Success',
  props<{ playerSuccess: any }>()
);

export const yRankUSerSuccess = createAction(
  '[PlayerSearch] Y rankUSer Success',
  props<{ rankUser: RankUserModel[] }>()
);

export const yHistoricSuccess = createAction(
  '[PlayerSearch] Y HistoricSuccess Success',
  props<{ historicUser: Array<any> }>()
);


// export const yResultHistoric = createAction(
//   '[PlayerSearch] Y ResultHistoric Success',
//   props<{ resultHistoric: any }>()
// );

export const yPlayerSearchsFailure = createAction(
  '[PlayerSearch] Y PlayerSearchs Failure',
  props<{ error: any }>()
);
