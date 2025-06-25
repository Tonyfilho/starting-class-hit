import { Routes } from '@angular/router';

import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'angular', pathMatch: 'full' }, //rora Padrão
  { path: 'angular', loadComponent: () => import('./pages/angular/angular-component/angular.component').then(c => c.AngularComponent) },
  { path: 'angular/git', loadComponent: () => import('./pages/angular/git/git.component').then(c => c.GitComponent) },
  { path: 'angular/hit', loadChildren: () => import('./pages/hit/hit.routes').then(c => c.hitRoutes) },
  { path: 'angular/levels', loadChildren: () => import('./pages/books/level.router').then(c => c.levelRoutes) },
  { path: 'angular/solid', loadChildren: () => import('./pages/solid/solid.router').then(c => c.solidRoutes) },
  { path: 'angular/api', loadChildren: () => import('./pages/api/api.routes').then(c => c.apiRoutes) },

  { path: '**', loadComponent: () => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent) }
  // {path: '**', redirectTo: () => {return 'not-found'}},

];
export const routesExemplo: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }


];
