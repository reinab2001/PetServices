import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetServicesPage } from './pet-services.page';

const routes: Routes = [
  {
    path: '',
    component: PetServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetServicesPageRoutingModule {}
