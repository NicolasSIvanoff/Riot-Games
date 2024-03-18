import { RankUserModel } from './../service/models/rankUser.model';
import { UserModel } from './../service/models/shearchUser.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { yPlayerSearchs } from '../store/actions/player-search.actions';
import { selectPlayerSearchSuccess } from '../store/selectors/player-search.selectors';
import { PlayerSearchService } from '../service/playerSearch.service';

@Component({
  selector: 'app-summoner-search',
  templateUrl: './summoner-search.component.html',
  styleUrls: ['./summoner-search.component.scss']
})
export class SummonerSearchComponent implements OnInit {

  historicUser$: Observable<any>;
  historicUser!: any[];
  resultUser!: any;
  rankUser!: RankUserModel[];

  mainUser: any[] = [];

  indexPricipal!: number;
  subscription: Subscription[] = [];
  constructor(public store: Store, private serv: PlayerSearchService) {
    this.historicUser$ = this.store.select(selectPlayerSearchSuccess);

  }

  ngOnInit(): void {
  }

  dispatchSearch(event: any): void {
    let inputValue = event.target.value;
    this.store.dispatch(yPlayerSearchs({ playerSearchs: inputValue }));
    this.serv.playerSearch(inputValue).subscribe(data => {
      this.resultUser = data;
      this.searchRanking(this.resultUser.id!)
      this.getHistoricUser(this.resultUser.puuid!)
    })

  }
  searchRanking(resultId: string): void {
    this.serv.playersRanking(resultId).subscribe(data => {
      this.rankUser = data;
    })
  }
  getHistoricUser(puuid: string): void {
    this.serv.getHistoric(puuid).subscribe(data => {
      this.historicUser = data;
      console.log('historico do ts principal', this.historicUser)
    })
  }


}

