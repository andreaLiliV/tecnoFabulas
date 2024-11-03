import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerosPageRoutingModule } from './generos-routing.module';

import { GenerosPage } from './generos.page';

import { LogoFabulasComponent } from 'src/app/logo-fabulas/logo-fabulas.component';

import { CerrarSesionComponent } from 'src/app/cerrar-sesion/cerrar-sesion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerosPageRoutingModule,
    LogoFabulasComponent,
    CerrarSesionComponent
  ],
  declarations: [GenerosPage]
})
export class GenerosPageModule {}
