import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Pagina404Page } from './pages/pagina404/pagina404.page';

const routes: Routes = [
  {    

    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'cyberpunk',
    loadChildren: () => import('./pages/cyberpunk/cyberpunk.module').then( m => m.CyberpunkPageModule)
  },
  {
    path: 'steampunk',
    loadChildren: () => import('./pages/steampunk/steampunk.module').then( m => m.SteampunkPageModule)
  },
  {
    path: 'distopia',
    loadChildren: () => import('./pages/distopia/distopia.module').then( m => m.DistopiaPageModule)
  },
  {
    path: 'viajes',
    loadChildren: () => import('./pages/viajes/viajes.module').then( m => m.ViajesPageModule)
  },
  {
    path: 'bookreader',
    loadChildren: () => import('./pages/bookreader/bookreader.module').then( m => m.BookreaderPageModule)
  },
  {
    path: 'administrador',
    loadChildren: () => import('./pages/administrador/administrador.module').then( m => m.AdministradorPageModule)
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./pages/catalogo/catalogo.module').then( m => m.CatalogoPageModule)
  },
  
  {
    path: 'camara',
    loadChildren: () => import('./pages/camara/camara.module').then( m => m.CamaraPageModule)
  },  
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  },  
  {
    path: 'autores',
    loadChildren: () => import('./pages/autores/autores.module').then( m => m.AutoresPageModule)
  },  
  {
    path: 'preferidos',
    loadChildren: () => import('./pages/preferidos/preferidos.module').then( m => m.PreferidosPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/pagina404/pagina404.module').then( m => m.Pagina404PageModule)
  },
  
  /*{
    path: '**',
    component: Pagina404Page
  },*/
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
