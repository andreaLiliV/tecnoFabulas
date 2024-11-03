import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,

    children:[
      {
        path: 'biblioteca',
        loadChildren: () => import('../tabs/biblioteca/biblioteca.module').then( m => m.BibliotecaPageModule)

      },
      {
        path: 'generos',
        loadChildren: () => import('../tabs/generos/generos.module').then( m => m.GenerosPageModule)

      },
      {
        path: 'perfil',
        loadChildren: () => import('../tabs/perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/biblioteca',
        pathMatch: 'full'
      }

    ]

  }//fin path
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
