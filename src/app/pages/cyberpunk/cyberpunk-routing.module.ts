import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CyberpunkPage } from './cyberpunk.page';

const routes: Routes = [
  {
    path: '',
    component: CyberpunkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CyberpunkPageRoutingModule {}
