import { Routes } from '@angular/router';

export const apiRoutes: Routes = [

  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  { path: 'weather', loadComponent: () => import('./weather/weather.component').then(cChild => cChild.WeatherComponent) },
  { path: 'reqres', loadComponent: () => import('./reqres/reqres.component').then(cChild => cChild.ReqresComponent) },

];
