import { Routes } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { authenticationGuard } from './_guards/authentication.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'e-book/angular', pathMatch: 'full' }, //rora Padrão
  { path: 'e-book/angular/home', loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent), },
  { path: 'e-book/angular', loadComponent: () => import('./pages/angular/angular.component').then(c => c.AngularComponent), },
  { path: 'e-book/angular/get-starting', loadComponent: () => import('./pages/angular/get-srtaing-angular/get-starting-with-angular.component').then(c => c.GetStartingWithAngularComponent) },
  { path: 'e-book/angular/git', loadComponent: () => import('./pages/angular/git/git.component').then(c => c.GitComponent) },
  { path: 'e-book/angular/firebase', loadChildren: () => import('./pages/firebase/firebase.router').then(c => c.firebaseRoutes) },
  { path: 'e-book/angular/forms', loadChildren: () => import('./pages/forms/forms.router').then(c => c.formsRoutes) },

  { path: 'e-book/angular/dry', loadComponent: () => import('./pages/dry/dry.component').then(c => c.DryComponent), canActivate:[authenticationGuard] },
  { path: 'e-book/angular/object-calisthenics', loadChildren: () => import('./pages/object-calisthenics/object-calisthenic.router').then(c => c.ObjectCalisthenicRoutes), canActivate:[authenticationGuard] },
  { path: 'e-book/angular/rxJs-foundation', loadChildren: () => import('./pages/rxjs/rxjs-fundaments.router').then(c => c.rxJsFundamentsRoutes), canActivate:[authenticationGuard] },
  { path: 'e-book/angular/js-foundation', loadChildren: () => import('./pages/js-fundaments/js-fundaments.router').then(c => c.jsFundamentsRoutes), canActivate:[authenticationGuard] },

  { path: 'e-book/angular/levels', loadChildren: () => import('./pages/books/level.router').then(c => c.levelRoutes), canActivate:[authenticationGuard] },
  { path: 'e-book/angular/solid', loadChildren: () => import('./pages/solid/solid.router').then(c => c.solidRoutes), canActivate:[authenticationGuard] },
  { path: 'e-book/angular/api', loadChildren: () => import('./pages/api/api.routes').then(c => c.apiRoutes), canActivate:[authenticationGuard] },

  { path: '**', loadComponent: () => import('./components/not-found/not-found.component').then(c => c.NotFoundComponent) }
  // {path: '**', redirectTo: () => {return 'not-found'}},

];
/**Só um Dummy para mostrar a outra forma */
export const routesExemplo: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }


];
