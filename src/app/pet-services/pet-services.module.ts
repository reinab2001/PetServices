import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetServicesPageRoutingModule } from './pet-services-routing.module';

import { PetServicesPage } from './pet-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetServicesPageRoutingModule
  ],
  declarations: [PetServicesPage]
})
export class PetServicesPageModule {}
