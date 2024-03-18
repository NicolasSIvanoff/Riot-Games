import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChampionsComponent } from './champions/champions.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ChampionsEffects } from './store/effects/champions.effects';
import { reducers } from './store/reducers/root.reducers';
import { NavbarComponent } from './navbar/navbar.component';
import { QueryComponent } from './query/query.component';
import { SkeletonLoaderModule } from './skeleton-loader/skeleton-loader.module';
import { SummonerSearchComponent } from './summoner-search/summoner-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerSearchEffects } from './store/effects/player-search.effects';
import { MomentModule } from 'ngx-moment';
import { HistoricUserComponent } from './historic-user/historic-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionsComponent,
    NavbarComponent,
    QueryComponent,
    SummonerSearchComponent,
    HistoricUserComponent
  ],
  imports: [
    MomentModule,
    BrowserModule,
    FormsModule,
    SkeletonLoaderModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([
      ChampionsEffects,
      PlayerSearchEffects
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
