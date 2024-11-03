import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
