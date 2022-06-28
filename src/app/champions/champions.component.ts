import { selectChampionsSuccess, selectLoad } from './../store/selectors/champions.selectors';
import { Observable, Subscription } from 'rxjs';
import { RiotService } from './../service/riot.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actionsChamp from '../store/actions/champions.actions';
@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss', '../skeleton-loader/skeleton-loader.component.scss']
})
export class ChampionsComponent implements OnInit {
  public championsStore$!: Observable<any>;
  public championsStore!: any | null;
  public subscription: Subscription[] = [];
  public champions: any;
  public array?: Array<any>;
  public tudo: any;
  public load: boolean = false;
  public load$!: Observable<boolean>;
  constructor(public serv: RiotService, public store: Store) {
    this.championsStore$ = this.store.select(selectChampionsSuccess);
    this.load$ = this.store.select(selectLoad);

  }

  ngOnInit(): void {
    this.subscription.push(
      this.load$.subscribe(data => {
        this.load = false;
        console.log('data', data)
      }))
    this.getApiChampions();
    this.getChampions();
  }
  public getChampions(): void {
    this.store.dispatch(actionsChamp.loadChampions());
  }
  public getApiChampions(): void {
    this.subscription.push(
      this.championsStore$.subscribe(data => {
        if (data != null) {
          this.championsStore = data.data
          console.log(this.championsStore)
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
            console.log(this.tudo)
            this.tudo = this.tudo.replace('.png', '_0.jpg');
            console.log(this.tudo)
            this.array[i][1].image.full = this.tudo;

          }
        }
      }))
  }
}


