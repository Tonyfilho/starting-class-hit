import { Routes } from '@angular/router';

export const ObjectCalisthenicRoutes: Routes = [
    {path: '', redirectTo: 'calisthenics', pathMatch: 'full'},
    {path: 'calisthenics', loadComponent:() => import('./object-calisthenic.component').then(cChild => cChild.ObjectCalisthenicComponent)},

]
