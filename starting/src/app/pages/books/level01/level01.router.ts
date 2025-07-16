import { Routes } from '@angular/router';

export const level01Routes: Routes = [

  { path: '', redirectTo: 'directives', pathMatch: 'full' },
  { path: 'directives', loadComponent: () => import('./01-angular-directives/angular-directives.component').then(cChild => cChild.AngularDirectivesComponent) },
  { path: 'template-events', loadComponent: () => import('./02-template-events/template-events.component').then(cChild => cChild.TemplateEventsComponent) },
  { path: 'operators', loadComponent: () => import('./03-operators/operators.component').then(cChild => cChild.OperatorsComponent) },
  // { path: 'leveltwo', loadComponent: () => import('../level02/level02.component').then(cChild => cChild.Level02Component) },
  // { path: 'levelthree', loadComponent: () => import('../level03/level03.component').then(cChild => cChild.Level03Component) },
  // { path: 'levelfour', loadComponent: () => import('../level04/level04.component').then(cChild => cChild.Level04Component) },
];
