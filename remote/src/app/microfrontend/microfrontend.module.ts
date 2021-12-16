import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MicrofrontendRoutingModule } from './microfrontend-routing.module';
import { MicrofrontendComponent } from './microfrontend/microfrontend.component';


@NgModule({
  declarations: [
    MicrofrontendComponent
  ],
  imports: [
    CommonModule,
    MicrofrontendRoutingModule
  ]
})
export class MicrofrontendModule { }
