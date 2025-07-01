import { Routes } from '@angular/router';

export const solidRoutes: Routes = [
    {path: '', redirectTo: 'solid', pathMatch: 'full'},
    {path: 'solid', loadComponent:() => import('./solid.component').then(cChild => cChild.SolidComponent)},
    {path: 'srp', loadComponent:() => import('./single-responsibility/single-responsibility.component').then(cChild => cChild.SingleResponsibilityComponent)},
    {path: 'ocp', loadComponent:() => import('./open-closed-principle/open-closed-principle.component').then(cChild => cChild.OpenClosedPrincipleComponent)},
    {path: 'lsp', loadComponent:() => import('./liskov-substituition/liskov-substituition.component').then(cChild => cChild.LiskovSubstituitionComponent)},
    {path: 'isp', loadComponent:() => import('./interface-segregation/interface-segregation.component').then(cChild => cChild.InterfaceSegregationComponent)},
    {path: 'dip', loadComponent:() => import('./dependency-inversion/dependency-inversion.component').then(cChild => cChild.DependencyInversionComponent)},
]
