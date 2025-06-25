import { Routes } from '@angular/router';

export const levelRoutes: Routes = [

  { path: '', redirectTo: 'levelone', pathMatch: 'full' },
  { path: 'levelone', loadComponent: () => import('./level01/level01.component').then(cChild => cChild.Level01Component) },
  { path: 'leveltwo', loadComponent: () => import('./level02/level02.component').then(cChild => cChild.Level02Component) },
  { path: 'levelthree', loadComponent: () => import('./level03/level03.component').then(cChild => cChild.Level03Component) },
  { path: 'levelfour', loadComponent: () => import('./level04/level04.component').then(cChild => cChild.Level04Component) },
];
