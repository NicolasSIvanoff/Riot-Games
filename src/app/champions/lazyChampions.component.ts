import { CommonModule } from '@angular/common';
import { Component, ComponentFactoryResolver, NgModule, OnInit, ViewContainerRef } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { selectChampionsSuccess, selectLoad } from "../store/selectors/champions.selectors";

@Component({
  selector: 'app-lazyChampions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss', '../skeleton-loader/skeleton-loader.component.scss']
})
export class lazyChampionsComponent implements OnInit {

  public championsStore$!: Observable<any>;
  public championsStore!: any | null;
  public subscription: Subscription[] = [];
  public setChamps: any = [];
  public active: boolean = true;
  public load: boolean = false;
  public load$!: Observable<boolean>;
  public first: number = 5;
  public last: number = 9;
  constructor(private viewContainerRef: ViewContainerRef, private cfr: ComponentFactoryResolver, private store: Store) {
    this.championsStore$ = this.store.select(selectChampionsSuccess);
    this.load$ = this.store.select(selectLoad);
  }

  ngOnInit(): void {
    this.getLazy();
    this.getPrevious();
  }
  public getLazy() {
    this.subscription.push(
      this.load$.subscribe(data => {
        this.load = data;
      }))
    this.subscription.push(
      this.championsStore$.subscribe(data => {
        this.championsStore = data;
        if (this.championsStore) {
          this.setChamps = this.championsStore.slice(this.first, this.last);
        }

      }),
    );
    this.first = this.first + 4,
      this.last = this.last + 4
    console.log(this.first, this.last)
  }

  public getPrevious(): void {
    this.first = this.first - 4;
    this.last = this.last - 4;
    if (this.championsStore) {
      this.setChamps = this.championsStore.slice(this.first, this.last);
      console.log('champs', this.setChamps)
      console.log(this.first, this.last)
    }

  }
}

@NgModule({
  declarations: [lazyChampionsComponent],
  imports: [CommonModule],
  providers: [],
  bootstrap: [lazyChampionsComponent],
})
class LazyFormModule {
  constructor() {
  }
}
