import { Routes } from '@angular/router';

export const jsFundamentsRoutes: Routes = [
    {path: '', redirectTo: 'js-fundaments', pathMatch: 'full'},
    {path: '', loadComponent:() => import('./js-fundaments.component').then(c => c.JsFundamentsComponent)},

]
