import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'libs/material/src';




@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, AppRoutingModule, RouterModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})


export class AppModule {}
