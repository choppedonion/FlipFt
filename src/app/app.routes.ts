import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FeatureFlippingComponent } from './pages/feature-flipping/feature-flipping.component';
import { TeamsComponent } from './pages/teams/teams.component';
import {ProductsComponent} from "./pages/products/products.component";

export const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: ':idTeam/products', component: ProductsComponent },
  { path: 'features', component: FeatureFlippingComponent },
  { path: '', redirectTo: '/teams', pathMatch: 'full' },
  { path: '**', redirectTo: '/teams' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
