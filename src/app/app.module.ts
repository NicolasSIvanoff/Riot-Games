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

@NgModule({
  declarations: [
    AppComponent,
    ChampionsComponent,
    NavbarComponent,
    QueryComponent,
  ],
  imports: [
    BrowserModule,
    SkeletonLoaderModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([
      ChampionsEffects
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
