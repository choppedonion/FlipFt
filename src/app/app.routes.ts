import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FeatureFlippingComponent } from './pages/feature-flipping/feature-flipping.component';
import { TeamsComponent } from './pages/teams/teams.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'features', component: FeatureFlippingComponent },
  { path: 'teams', component: TeamsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
