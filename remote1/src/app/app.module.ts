import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Microfrontend1Module } from './microfrontend1/microfrontend1.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, Microfrontend1Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
