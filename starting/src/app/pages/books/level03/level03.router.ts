import { Routes } from '@angular/router';

export const level03Routes: Routes = [

  { path: '', redirectTo: 'observables', pathMatch: 'full' },
  { path: 'observables', loadComponent: () => import('./01-observable/observables.component').then(cChild => cChild.ObservablesComponent) },
  { path: 'promise', loadComponent: () => import('./02-promises/promises.component').then(cChild => cChild.PromisesComponent) },
  { path: 'signal', loadComponent: () => import('./03-signal/signal.component').then(cChild => cChild.SignalComponent) },



];
