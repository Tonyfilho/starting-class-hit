import { Routes } from '@angular/router';

export const ObjectCalisthenicRoutes: Routes = [
    {path: '', redirectTo: 'calisthenics', pathMatch: 'full'},
    {path: 'calisthenics', loadComponent:() => import('./object-calisthenic.component').then(cChild => cChild.ObjectCalisthenicComponent)},
    {path: 'rule1-one-indent', loadComponent:() => import('./rule1-one-indent-component/rule1-one-indent-component.component').then(cChild => cChild.Rule1OneIndentComponentComponent)},

]
