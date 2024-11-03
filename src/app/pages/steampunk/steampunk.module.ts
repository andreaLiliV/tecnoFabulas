import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SteampunkPageRoutingModule } from './steampunk-routing.module';

import { SteampunkPage } from './steampunk.page';

import { BotonRetrocesogeneroComponent } from 'src/app/boton-retrocesogenero/boton-retrocesogenero.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SteampunkPageRoutingModule,
    BotonRetrocesogeneroComponent
  ],
  declarations: [SteampunkPage]
})
export class SteampunkPageModule {}
