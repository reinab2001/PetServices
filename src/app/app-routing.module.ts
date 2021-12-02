import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'pet-services',
    loadChildren: () => import('./pet-services/pet-services.module').then( m => m.PetServicesPageModule)
  },
  {
    path: 'pet-walkers',
    loadChildren: () => import('./pet-walkers/pet-walkers.module').then( m => m.PetWalkersPageModule)
  },
  {
    path: 'pet-sitters',
    loadChildren: () => import('./pet-sitters/pet-sitters.module').then( m => m.PetSittersPageModule)
  },

  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
