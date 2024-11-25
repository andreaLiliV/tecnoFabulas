import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreferidosPageRoutingModule } from './preferidos-routing.module';

import { PreferidosPage } from './preferidos.page';

import { BotonRetrocesoComponent } from 'src/app/boton-retroceso/boton-retroceso.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreferidosPageRoutingModule,
    BotonRetrocesoComponent
  ],
  declarations: [PreferidosPage]
})
export class PreferidosPageModule {}
