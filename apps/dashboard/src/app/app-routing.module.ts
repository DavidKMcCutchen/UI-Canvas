import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './home/charts/charts.component';
import { MapComponent } from './home/map/map.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {} },
  { path: 'home', component: HomeComponent, data: {} },
  { path: 'charts', component: ChartsComponent },
  { path: 'maps', component: MapComponent },
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
