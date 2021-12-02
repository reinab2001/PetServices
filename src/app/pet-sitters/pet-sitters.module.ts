import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetSittersPageRoutingModule } from './pet-sitters-routing.module';

import { PetSittersPage } from './pet-sitters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetSittersPageRoutingModule
  ],
  declarations: [PetSittersPage]
})
export class PetSittersPageModule {}
