import { Routes } from '@angular/router';

export const level02Routes: Routes = [

  { path: '', redirectTo: 'binding-types', pathMatch: 'full' },
  { path: 'binding-types', loadComponent: () => import('./01-binding-types/binding-types.component').then(cChild => cChild.BindingTypesComponent) },
  { path: 'destructuring', loadComponent: () => import('./02-destructuring/destructuring.component').then(cChild => cChild.DestructuringComponent) },


];
