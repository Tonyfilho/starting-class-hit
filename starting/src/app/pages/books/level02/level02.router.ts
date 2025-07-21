import { Routes } from '@angular/router';

export const level02Routes: Routes = [

  { path: '', redirectTo: 'binding-types', pathMatch: 'full' },
  { path: 'binding-types', loadComponent: () => import('./01-binding-types/binding-types.component').then(cChild => cChild.BindingTypesComponent) },
  { path: 'destructuring', loadComponent: () => import('./02-destructuring/destructuring.component').then(cChild => cChild.DestructuringComponent) },
  { path: 'spread', loadComponent: () => import('./03-spread/spread.component').then(cChild => cChild.SpreadComponent) },
  { path: 'data-sharing', loadComponent: () => import('./04-data-sharing/data-sharing.component').then(cChild => cChild.DataSharingComponent) },


];
