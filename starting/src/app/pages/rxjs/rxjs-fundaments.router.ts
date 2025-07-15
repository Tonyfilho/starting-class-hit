import { Routes } from '@angular/router';

export const rxJsFundamentsRoutes: Routes = [
    {path: '', redirectTo: 'rxjs-fundaments', pathMatch: 'full'},
    {path: '', loadComponent:() => import('./rxjs.component').then(c => c.RxjsComponent)},
    {path: 'pipe', loadComponent:() => import('./01-operator-pipe/operator-pipe.component').then(c => c.OperatorPipeComponent)},
    {path: 'from', loadComponent:() => import('./02-operator-from/operator-from.component').then(c => c.OperatorFromComponent)},
    {path: 'of', loadComponent:() => import('./03-operator-of/operator-of.component').then(c => c.OperatorOfComponent)},
    {path: 'map', loadComponent:() => import('./04-operator-map/operator-map.component').then(c => c.OperatorMapComponent)},
    {path: 'filter', loadComponent:() => import('./05-operator-filter/operator-filter.component').then(c => c.OperatorFilterComponent)},
    {path: 'tap', loadComponent:() => import('./06-operator-tap/operator-tap.component').then(c => c.OperatorTapComponent)},
    {path: 'find', loadComponent:() => import('./07-operator-find/operator-find.component').then(c => c.OperatorFindComponent)},
    {path: 'switchMap', loadComponent:() => import('./08-operator-switch-map/operator-switch-map.component').then(c => c.OperatorSwitchMapComponent)},
    {path: 'concatMap', loadComponent:() => import('./09-operator-concat-map/operator-concat-map.component').then(c => c.OperatorConcatMapComponent)},
    {path: 'mergeMap', loadComponent:() => import('./10-operator-merge-map/operator-merge-map.component').then(c => c.OperatorMergeMapComponent)},
    {path: 'take', loadComponent:() => import('./11-operator-take/operator-take.component').then(c => c.OperatorTakeComponent)},
    {path: 'catchError', loadComponent:() => import('./12-operator.catch-error/operator-catch-error.component').then(c => c.OperatorCatchErrorComponent)},


]
