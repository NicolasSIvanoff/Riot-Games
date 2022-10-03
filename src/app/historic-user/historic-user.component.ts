import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { PlayerSearchService } from '../service/playerSearch.service';
import { selectPlayerSearchSuccess } from '../store/selectors/player-search.selectors';

@Component({
  selector: 'app-historic-user',
  templateUrl: './historic-user.component.html',
  styleUrls: ['./historic-user.component.scss']
})
export class HistoricUserComponent implements OnInit {

  historicUserData$: Observable<Array<any>>;
  historicUser!: Array<any>;
  subscription: Subscription[] = [];

  constructor(public store: Store, private serv: PlayerSearchService) {
    this.historicUserData$ = this.store.select(selectPlayerSearchSuccess);

  }

  ngOnInit() {
    this.suspeito();
    console.log('resultUser', this.historicUserData$)
  }
  suspeito() {
    setTimeout(() => {
      this.subscription.push(
        this.historicUserData$.subscribe(data => {
          this.historicUser = data;

          console.log('resultUser', data);
        }
        ))
      console.log('resultUser$', this.historicUserData$)
    }, 3000)
  }
}

