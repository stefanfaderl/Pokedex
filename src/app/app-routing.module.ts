import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonOverviewComponent } from './pokemon-overview/pokemon-overview.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: PokemonOverviewComponent },
  { path: 'pokemon-detail/:id', component: PokemonDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
