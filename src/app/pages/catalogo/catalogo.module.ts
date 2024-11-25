import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogoPageRoutingModule } from './catalogo-routing.module';

import { CatalogoPage } from './catalogo.page';

import { BotonRetrocesoComponent } from 'src/app/boton-retroceso/boton-retroceso.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogoPageRoutingModule,
    BotonRetrocesoComponent
  ],
  declarations: [CatalogoPage]
})
export class CatalogoPageModule {}
