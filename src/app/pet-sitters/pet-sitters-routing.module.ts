import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetSittersPage } from './pet-sitters.page';

const routes: Routes = [
  {
    path: '',
    component: PetSittersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetSittersPageRoutingModule {}
