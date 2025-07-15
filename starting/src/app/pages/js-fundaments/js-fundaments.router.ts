import { Routes } from '@angular/router';

export const jsFundamentsRoutes: Routes = [
    {path: '', redirectTo: 'js-foundation', pathMatch: 'full'},
    {path: '', loadComponent:() => import('./js-fundaments.component').then(c => c.JsFundamentsComponent)},
    {path: 'js-fundamentals', loadComponent:() => import('./01-js-fundamentals/js-fundamentals.component').then(c => c.JsFundamentalsComponent)},
    {path: 'functions-and-scope', loadComponent:() => import('./02-functions-and-scope/functions-and-scope.component').then(c => c.FunctionsAndScopeComponent)},
    {path: 'object-and-arrays', loadComponent:() => import('./03-object-and-arrays/object-and-arrays.component').then(c => c.ObjectAndArraysComponent)},
    {path: 'object-oriented-programming', loadComponent:() => import('./04-object-oriented-programming/object-oriented-programming.component').then(c => c.ObjectOrientedProgrammingComponent)},
    {path: 'modules-and-imports', loadComponent:() => import('./05-modules-and-imports/modules-and-imports.component').then(c => c.ModulesAndImportsComponent)},
    {path: 'type-script-essentials', loadComponent:() => import('./06-type-script-essentials/type-script-essentials.component').then(c => c.TypeScriptEssentialsComponent)},
    {path: 'js-asynchronous-programming', loadComponent:() => import('./07-js-asynchronous-programming/js-asynchronous-programming.component').then(c => c.JsAsynchronousProgrammingComponent)},

]
