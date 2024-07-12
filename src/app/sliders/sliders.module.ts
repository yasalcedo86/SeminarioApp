import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidersPageRoutingModule } from './sliders-routing.module';

import { SlidersPage } from './sliders.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidersPageRoutingModule
  ],
  declarations: [SlidersPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SlidersPageModule {}
