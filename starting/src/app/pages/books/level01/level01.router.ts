import { Routes } from '@angular/router';

export const level01Routes: Routes = [

  { path: '', redirectTo: 'directives', pathMatch: 'full' },
  { path: 'directives', loadComponent: () => import('./01-angular-directives/angular-directives.component').then(cChild => cChild.AngularDirectivesComponent) },
  { path: 'template-events', loadComponent: () => import('./02-template-events/template-events.component').then(cChild => cChild.TemplateEventsComponent) },
  { path: 'operators', loadComponent: () => import('./03-operators/operators.component').then(cChild => cChild.OperatorsComponent) },
  { path: 'pipes', loadComponent: () => import('./04-pipes/pipes.component').then(cChild => cChild.PipesComponent) },
  { path: 'dependency-injection', loadComponent: () => import('./05-dependency-injection/dependency-injection.component').then(cChild => cChild.DependencyInjectionComponent) },
  { path: 'routing', loadComponent: () => import('./06-routing/routing.component').then(cChild => cChild.RoutingComponent) },

];
