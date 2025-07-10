import { Routes } from '@angular/router';

export const jsFundamentsRoutes: Routes = [
    {path: '', redirectTo: 'js-fundaments', pathMatch: 'full'},
    {path: '', loadComponent:() => import('./js-fundaments.component').then(c => c.JsFundamentsComponent)},
    {path: 'js-fundamentals', loadComponent:() => import('./01-js-fundamentals/js-fundamentals.component').then(c => c.JsFundamentalsComponent)},
    {path: 'functions-and-scope', loadComponent:() => import('./02-functions-and-scope/functions-and-scope.component').then(c => c.FunctionsAndScopeComponent)},

]
