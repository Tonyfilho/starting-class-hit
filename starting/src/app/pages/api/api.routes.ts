import { Routes } from '@angular/router';

export const apiRoutes: Routes = [

  { path: '', redirectTo: 'api', pathMatch: 'full' },
  { path: '', loadComponent: () => import('./api.component').then(cChild => cChild.ApiComponent) },
  { path: 'cors', loadComponent: () => import('./cors/cors.component').then(cChild => cChild.CorsComponent) },
  { path: 'weather', loadComponent: () => import('./weather/weather.component').then(cChild => cChild.WeatherComponent) },
  { path: 'reqres', loadComponent: () => import('./reqres/reqres.component').then(cChild => cChild.ReqresComponent) },
  { path: 'json-placeholder-crud', loadComponent: () => import('./json-place-holder-crud/json-place-holder-crud-component').then(cChild => cChild.JsonPlaceHolderCrudComponent) },
  { path: 'http-success-200', loadComponent: () => import('./http-success-200/success-200.component').then(cChild => cChild.Success200Component) },
  { path: 'http-error-400', loadComponent: () => import('./http-error-400/http-error-400.component').then(cChild => cChild.HttpError400Component) },
  { path: 'http-error-500', loadComponent: () => import('./http-error-500/http-error-500.component').then(cChild => cChild.HttpError500Component) },

];
