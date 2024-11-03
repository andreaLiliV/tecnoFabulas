import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';

import { LogoFabulasComponent } from 'src/app/logo-fabulas/logo-fabulas.component';

import { CerrarSesionComponent } from 'src/app/cerrar-sesion/cerrar-sesion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    LogoFabulasComponent,
    CerrarSesionComponent
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
