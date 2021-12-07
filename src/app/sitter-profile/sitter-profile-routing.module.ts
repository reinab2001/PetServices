import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SitterProfilePage } from './sitter-profile.page';

const routes: Routes = [
  {
    path: '',
    component: SitterProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SitterProfilePageRoutingModule {}
