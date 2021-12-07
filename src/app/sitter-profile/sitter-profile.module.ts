import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SitterProfilePageRoutingModule } from './sitter-profile-routing.module';

import { SitterProfilePage } from './sitter-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SitterProfilePageRoutingModule
  ],
  declarations: [SitterProfilePage]
})
export class SitterProfilePageModule {}
