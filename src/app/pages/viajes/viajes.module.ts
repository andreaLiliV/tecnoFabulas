import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajesPageRoutingModule } from './viajes-routing.module';

import { ViajesPage } from './viajes.page';

import { BotonRetrocesogeneroComponent } from 'src/app/boton-retrocesogenero/boton-retrocesogenero.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajesPageRoutingModule,
    BotonRetrocesogeneroComponent
  ],
  declarations: [ViajesPage]
})
export class ViajesPageModule {}
