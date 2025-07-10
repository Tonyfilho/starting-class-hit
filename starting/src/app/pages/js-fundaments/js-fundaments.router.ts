import { Routes } from '@angular/router';

export const jsFundamentsRoutes: Routes = [
    {path: '', redirectTo: 'js-fundaments', pathMatch: 'full'},
    {path: '', loadComponent:() => import('./js-fundaments.component').then(c => c.JsFundamentsComponent)},
    {path: 'js-fundamentals', loadComponent:() => import('./js-fundamentals/js-fundamentals.component').then(c => c.JsFundamentalsComponent)},

]
