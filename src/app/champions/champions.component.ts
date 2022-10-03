import { ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
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
  public array?: Array<any>;
  public active: boolean = true;
  public setChamps: any = [];
  public load: boolean = false;
  public load$!: Observable<boolean>;
  public first: number = 0;
  public last: number = 4;
  constructor(public serv: RiotService, public store: Store, private viewContainerRef: ViewContainerRef, private cfr: ComponentFactoryResolver) {
    this.championsStore$ = this.store.select(selectChampionsSuccess);
    this.load$ = this.store.select(selectLoad);

  }

  ngOnInit(): void {
    this.subscription.push(
      this.load$.subscribe(data => {
        this.load = data;
      }))
    this.subscription.push(
      this.championsStore$.subscribe(data => {
        this.championsStore = data;
        console.log('champ', this.championsStore$)
        console.log('champ', data)
        if (this.championsStore) {
          this.setChamps = this.championsStore.slice(0, 4);
        }
      }),
    );
    this.getChampions();

  }

  public getChampions(): void {
    this.store.dispatch(actionsChamp.loadChampions());
  }

  async getLazy() {
    this.viewContainerRef.clear();
    const { lazyChampionsComponent } = await import('./lazyChampions.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(lazyChampionsComponent)
    );
    this.active = !this.active;
  }
  public getPrevious(): void {
    if (this.championsStore) {
      this.setChamps = this.championsStore.slice(this.first - 4, this.last - 4);
      console.log('champs', this.setChamps)
    }

  }

}


