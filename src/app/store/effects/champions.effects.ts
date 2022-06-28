import { RiotService } from './../../service/riot.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as ChampionsActions from '../actions/champions.actions';
import { Store } from '@ngrx/store';


@Injectable()
export class ChampionsEffects {

  loadChampionss$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChampionsActions.loadChampions),
      mergeMap(() =>
        this.serv.getChampions().pipe(
          map(data => {
            this.store.dispatch(ChampionsActions.loadStatus({ load: true }));
            return ChampionsActions.loadChampionsSuccess({ data })
          }),
        )
      ),
      catchError(error => of(ChampionsActions.loadChampionssFailure({ error }))))
  )
  constructor(private actions$: Actions, private serv: RiotService, private store: Store) { }
};
