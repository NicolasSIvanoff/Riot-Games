import { ChampionsModel } from './models/champions.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RiotService {

  constructor(private http: HttpClient) { }

  getChampions(): Observable<ChampionsModel> {
    return this.http.get<ChampionsModel>('http://ddragon.leagueoflegends.com/cdn/12.11.1/data/pt_BR/champion.json')

  }
}
