import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistopiaPageRoutingModule } from './distopia-routing.module';

import { DistopiaPage } from './distopia.page';

import { BotonRetrocesogeneroComponent } from 'src/app/boton-retrocesogenero/boton-retrocesogenero.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistopiaPageRoutingModule,
    BotonRetrocesogeneroComponent
  ],
  declarations: [DistopiaPage]
})
export class DistopiaPageModule {}
