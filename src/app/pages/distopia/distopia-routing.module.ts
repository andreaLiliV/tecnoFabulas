import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistopiaPage } from './distopia.page';

const routes: Routes = [
  {
    path: '',
    component: DistopiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistopiaPageRoutingModule {}
