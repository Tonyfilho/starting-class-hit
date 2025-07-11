import { Routes } from '@angular/router';

export const rxJsFundamentsRoutes: Routes = [
    {path: '', redirectTo: 'rxjs-fundaments', pathMatch: 'full'},
    {path: '', loadComponent:() => import('./rxjs.component').then(c => c.RxjsComponent)},
    {path: 'pipe', loadComponent:() => import('./01-operador-pipe/operator-pipe.component').then(c => c.OperatorPipeComponent)},
    {path: 'from', loadComponent:() => import('./02-operador-from/operator-from.component').then(c => c.OperatorFromComponent)},
    {path: 'of', loadComponent:() => import('./03-operador-of/operator-of.component').then(c => c.OperatorOfComponent)},
    {path: 'map', loadComponent:() => import('./04-operador-map/operator-map.component').then(c => c.OperatorMapComponent)},


]
