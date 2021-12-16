import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Microfrontend1Component } from './microfrontend1/microfrontend1.component';

const routes: Routes = [
  {
    path: '',
    component: Microfrontend1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Microfrontend1RoutingModule {}
