import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Microfrontend1RoutingModule } from './microfrontend1-routing.module';
import { Microfrontend1Component } from './microfrontend1/microfrontend1.component';


@NgModule({
  declarations: [
    Microfrontend1Component
  ],
  imports: [
    CommonModule,
    Microfrontend1RoutingModule
  ]
})
export class Microfrontend1Module { }
