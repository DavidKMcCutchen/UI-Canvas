import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@marilias-page/material';
import { DockComponent } from './home/dock/dock.component';
import { GMapModule } from 'primeng/gmap';
import { MapComponent } from './home/map/map.component';
import { PrimeNgModulesModule } from '@marilias-page/prime-ng-modules';
import { ChartsComponent } from './home/charts/charts.component';


@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HomeComponent,
    DockComponent,
    MapComponent,
    ChartsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    MaterialModule,
    GMapModule,
    PrimeNgModulesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
