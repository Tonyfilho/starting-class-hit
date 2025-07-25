import { Routes } from '@angular/router';

export const levelRoutes: Routes = [

  { path: '', redirectTo: 'levelone', pathMatch: 'full' },
  { path: 'levelone', loadChildren: () => import('./level01/level01.router').then(cChild => cChild.level01Routes) },
  { path: 'leveltwo', loadChildren: () => import('./level02/level02.router').then(cChild => cChild.level02Routes) },
  { path: 'levelthree', loadChildren: () => import('./level03/level03.router').then(cChild => cChild.level03Routes) },
];
