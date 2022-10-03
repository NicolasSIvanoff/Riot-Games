import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as  PlayerSearchActions from '../store/actions/player-search.actions';
@Injectable({
  providedIn: 'root'
})
export class PlayerSearchService {
  keyValue = environment.KeyValue;
  resultMatch: any[] = [];
  constructor(private http: HttpClient, private store: Store) { }

  playerSearch(nameUser: string): Observable<any> {
    return this.http.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nameUser}?api_key=${this.keyValue}`);
  }
  playersRanking(idUser: string): Observable<any> {
    return this.http.get(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${idUser}?api_key=${this.keyValue}`);
  }
  getHistoric(puuid: string): Observable<any> {
    return this.http.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${this.keyValue}`);
  }
  getMatch(matchid: string): Observable<any> {
    return this.http.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchid}?api_key=${this.keyValue}`);
  }
}
