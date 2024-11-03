import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliotecaPageRoutingModule } from './biblioteca-routing.module';

import { BibliotecaPage } from './biblioteca.page';

import { LogoFabulasComponent } from 'src/app/logo-fabulas/logo-fabulas.component';

import { CerrarSesionComponent } from 'src/app/cerrar-sesion/cerrar-sesion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliotecaPageRoutingModule,
    LogoFabulasComponent,
    CerrarSesionComponent
  ],
  declarations: [BibliotecaPage]
})
export class BibliotecaPageModule {}
