import { Routes } from "@angular/router";


export const hitRoutes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home/home.component').then(cChild => cChild.HomeComponent) },
  { path: 'project', loadComponent: () => import('./class-project/class-project.component').then(cChild => cChild.ClassProjectComponent) }
];

