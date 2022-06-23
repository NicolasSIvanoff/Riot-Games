import { selectChampionsSuccess } from './../store/selectors/champions.selectors';
import { Observable, Subscription } from 'rxjs';
import { RiotService } from './../service/riot.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actionsChamp from '../store/actions/champions.actions';
@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent implements OnInit {
  championsStore$!: Observable<any>;
  championsStore!: any | null;
  subscription: Subscription[] = [];
  champions: any;
  array?: Array<any>;
  tudo: any;
  constructor(public serv: RiotService, public store: Store) {
    this.championsStore$ = this.store.select(selectChampionsSuccess);
  }

  ngOnInit(): void {
    this.subscription.push(
      this.championsStore$.subscribe(data => {
        this.championsStore = data;
      }),
    );
    this.getApiChampions();
    this.getChampions();

  }
  public getChampions(): void {
    this.store.dispatch(actionsChamp.loadChampions());
  }
  public getApiChampions(): void {
    this.serv.getChampions().subscribe(data => {
      this.championsStore = data.data;
      let result = [];
      let key: any;
      for (key of Object.keys(this.championsStore)) {
        result.push(
          [key, this.championsStore[key]],
        )
      }
      this.array = result;
      for (let i = 0; i < this.array.length; i++) {
        this.tudo = this.array[i][1].image.full;
        this.tudo = this.tudo.replace('.png', '_0.jpg');
        this.array[i][1].image.full = this.tudo;

      }
    })
  }
}


