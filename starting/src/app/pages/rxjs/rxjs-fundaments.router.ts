import { Routes } from '@angular/router';

export const rxJsFundamentsRoutes: Routes = [
    {path: '', redirectTo: 'rxjs-fundaments', pathMatch: 'full'},
    {path: '', loadComponent:() => import('./rxjs.component').then(c => c.RxjsComponent)},
    {path: 'pipe', loadComponent:() => import('./01-operator-pipe/operator-pipe.component').then(c => c.OperatorPipeComponent)},
    {path: 'from', loadComponent:() => import('./02-operator-from/operator-from.component').then(c => c.OperatorFromComponent)},
    {path: 'of', loadComponent:() => import('./03-operator-of/operator-of.component').then(c => c.OperatorOfComponent)},
    {path: 'map', loadComponent:() => import('./04-operator-map/operator-map.component').then(c => c.OperatorMapComponent)},
    {path: 'filter', loadComponent:() => import('./05-operator-filter/operator-filter.component').then(c => c.OperatorFilterComponent)},


]
