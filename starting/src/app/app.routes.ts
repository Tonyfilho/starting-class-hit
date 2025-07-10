import { Routes } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'angular', pathMatch: 'full' }, //rora Padrão
  { path: 'angular', loadComponent: () => import('./pages/angular/angular.component').then(c => c.AngularComponent) },
  { path: 'angular/dry', loadComponent: () => import('./pages/dry/dry.component').then(c => c.DryComponent) },
  { path: 'angular/get-starting', loadComponent: () => import('./pages/angular/get-srtaing-angular/get-starting-with-angular.component').then(c => c.GetStartingWithAngularComponent) },
  { path: 'angular/git', loadComponent: () => import('./pages/angular/git/git.component').then(c => c.GitComponent) },

  { path: 'angular/object-calisthenics', loadChildren: () => import('./pages/object-calisthenics/object-calisthenic.router').then(c => c.ObjectCalisthenicRoutes) },
  { path: 'angular/firebase', loadChildren: () => import('./pages/firebase/firebase.router').then(c => c.firebaseRoutes) },
  { path: 'angular/js-fundaments', loadChildren: () => import('./pages/js-fundaments/js-fundaments.router').then(c => c.jsFundamentsRoutes) },
  { path: 'angular/hit', loadChildren: () => import('./pages/hit/hit.routes').then(c => c.hitRoutes) },
  { path: 'angular/forms', loadChildren: () => import('./pages/forms/forms.router').then(c => c.formsRoutes) },
  { path: 'angular/levels', loadChildren: () => import('./pages/books/level.router').then(c => c.levelRoutes) },
  { path: 'angular/solid', loadChildren: () => import('./pages/solid/solid.router').then(c => c.solidRoutes) },
  { path: 'angular/api', loadChildren: () => import('./pages/api/api.routes').then(c => c.apiRoutes) },

  { path: '**', loadComponent: () => import('./components/not-found/not-found.component').then(c => c.NotFoundComponent) }
  // {path: '**', redirectTo: () => {return 'not-found'}},

];
export const routesExemplo: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }


];
