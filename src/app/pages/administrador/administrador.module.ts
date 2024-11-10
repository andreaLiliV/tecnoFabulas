import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministradorPageRoutingModule } from './administrador-routing.module';

import { AdministradorPage } from './administrador.page';

import { BotonRetrocesoComponent } from 'src/app/boton-retroceso/boton-retroceso.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministradorPageRoutingModule,
    BotonRetrocesoComponent
  ],
  declarations: [AdministradorPage]
})
export class AdministradorPageModule {}
