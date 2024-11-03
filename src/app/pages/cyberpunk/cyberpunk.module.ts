import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CyberpunkPageRoutingModule } from './cyberpunk-routing.module';

import { CyberpunkPage } from './cyberpunk.page';

import { BotonRetrocesogeneroComponent } from 'src/app/boton-retrocesogenero/boton-retrocesogenero.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CyberpunkPageRoutingModule,
    BotonRetrocesogeneroComponent    
  ],
  declarations: [CyberpunkPage]
})
export class CyberpunkPageModule {}
