import { Routes } from '@angular/router';

export const formsRoutes: Routes = [
    {path: '', redirectTo: 'forms', pathMatch: 'full'},
    {path: '', loadComponent:() => import('./forms.component').then(cChild => cChild.FormsComponent)},
    {path: 'forms&validators', loadComponent:() => import('./validators/validators.component').then(cChild => cChild.ValidatorsComponent)},
    {path: 'signin', loadComponent:() => import('./signin-forms/signin-forms.component').then(cChild => cChild.SigninformsComponent)},

]
