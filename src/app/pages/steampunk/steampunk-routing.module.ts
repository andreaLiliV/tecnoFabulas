import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SteampunkPage } from './steampunk.page';

const routes: Routes = [
  {
    path: '',
    component: SteampunkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SteampunkPageRoutingModule {}
