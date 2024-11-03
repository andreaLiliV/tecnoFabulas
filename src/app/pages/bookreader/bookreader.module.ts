import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookreaderPageRoutingModule } from './bookreader-routing.module';

import { BookreaderPage } from './bookreader.page';

import { BotonRetrocesoComponent } from 'src/app/boton-retroceso/boton-retroceso.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookreaderPageRoutingModule,
    BotonRetrocesoComponent
  ],
  declarations: [BookreaderPage]
})
export class BookreaderPageModule {}
