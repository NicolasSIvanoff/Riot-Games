import { ConfigureResult } from './../../../shared/utils/configure-result';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';
import * as PlayerSearchActions from '../actions/player-search.actions';
import { PlayerSearchService } from 'src/app/service/playerSearch.service';
import { Store } from '@ngrx/store';
import { Modify } from 'src/shared/utils/modify';


@Injectable()
export class PlayerSearchEffects {
  constructor(private actions$: Actions, private service: PlayerSearchService, private store: Store, private configureResult: ConfigureResult) { }

  yPlayerSearchs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerSearchActions.yPlayerSearchs),
      mergeMap((props) =>
        this.service.playerSearch(props.playerSearchs).pipe(
          map(resultUSer => {
            this.service.playersRanking(resultUSer.id).subscribe(resultId => {
              this.store.dispatch(PlayerSearchActions.yRankUSerSuccess({ rankUser: resultId }))
            });
            this.service.getHistoric(resultUSer.puuid).subscribe(
              resultHistoric => {
                console.log(resultHistoric);
                this.store.dispatch(PlayerSearchActions.yHistoricSuccess({ historicUser: resultHistoric }))
              }
            );

            return PlayerSearchActions.yPlayerSearchsSuccess({ playerSuccess: resultUSer });

          }),
          catchError(error => of(PlayerSearchActions.yPlayerSearchsFailure({ error }))))
      )
    ));
}
