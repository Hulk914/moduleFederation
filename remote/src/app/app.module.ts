import { MicrofrontendModule } from './microfrontend/microfrontend.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MicrofrontendModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
