import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoresPageRoutingModule } from './autores-routing.module';

import { AutoresPage } from './autores.page';

import { BotonRetrocesoComponent } from 'src/app/boton-retroceso/boton-retroceso.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoresPageRoutingModule,
    BotonRetrocesoComponent
  ],
  declarations: [AutoresPage]
})
export class AutoresPageModule {}
