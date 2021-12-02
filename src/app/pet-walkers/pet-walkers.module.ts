import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetWalkersPageRoutingModule } from './pet-walkers-routing.module';

import { PetWalkersPage } from './pet-walkers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetWalkersPageRoutingModule
  ],
  declarations: [PetWalkersPage]
})
export class PetWalkersPageModule {}
