import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './pages/teams/teams.component';
import { ProductsComponent } from './pages/products/products.component';
import { FeatureFlippingComponent } from './pages/feature-flipping/feature-flipping.component';
import { FeatureFlippingHomeComponent } from './pages/feature-flipping-home/feature-flipping-home.component';

export const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: ':idTeam/products', component: ProductsComponent },
  { path: ':idTeam/products/:idProduct/features', component: FeatureFlippingComponent },

  {
    path: 'feature-flipping',
    children: [
      { path: '', component: FeatureFlippingHomeComponent },
      { path: 'backend', component: FeatureFlippingComponent }
    ]
  },

  { path: '', redirectTo: 'teams', pathMatch: 'full' },
  { path: '**', redirectTo: 'teams' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
