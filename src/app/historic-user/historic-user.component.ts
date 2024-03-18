import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { PlayerSearchService } from '../service/playerSearch.service';
import { RiotService } from '../service/riot.service';
import { selectPlayerSearchSuccess } from '../store/selectors/player-search.selectors';

@Component({
  selector: 'app-historic-user',
  templateUrl: './historic-user.component.html',
  styleUrls: ['./historic-user.component.scss']
})
export class HistoricUserComponent implements OnInit {

  @Input() public historicUserData!: any;
  @Input() public resultUserData!: any;
  matchesID: any[] = [];
  resultMainUser: any[] = [];
  constructor(public serv: PlayerSearchService) {
  }

  ngOnInit() {
    this.duvido();
  }
  duvido() {
    this.getMatchesUser(this.historicUserData)
  }
  getMatchesUser(matchid: Array<any>): void {
    for (let i = 0; i < matchid.length; i++) {
      this.serv.getMatch(matchid[i]).subscribe(data => {
        this.matchesID.push(data)
      })
    }
    this.getMainUser(this.matchesID);
  }
  getMainUser(matchesId: Array<any>): void {
    for (let i = 0; i < matchesId.length; i++) {
      let index = matchesId[i].info.participants.findIndex((x: any) => x.puuid === this.resultUserData.puuid)
      console.log('dps', this.resultMainUser)
      this.resultMainUser.push(matchesId[i].info.participants[index])
    }
  }
}

