import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreferidosPage } from './preferidos.page';

const routes: Routes = [
  {
    path: '',
    component: PreferidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreferidosPageRoutingModule {}
