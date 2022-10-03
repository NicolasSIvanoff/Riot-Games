import { SummonerSearchComponent } from './summoner-search/summoner-search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionsComponent } from './champions/champions.component';
import { QueryComponent } from './query/query.component';

const routes: Routes = [
  { path: '', component: ChampionsComponent },
  { path: 'query', component: QueryComponent },
  { path: 'summoner', component: SummonerSearchComponent },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
