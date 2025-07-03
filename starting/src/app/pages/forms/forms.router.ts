import { Routes } from '@angular/router';

export const formsRoutes: Routes = [
    {path: '', redirectTo: 'forms', pathMatch: 'full'},
    {path: 'forms', loadComponent:() => import('./forms.component').then(cChild => cChild.FormsComponent)},
    {path: 'validators', loadComponent:() => import('./validators/validators.component').then(cChild => cChild.ValidatorsComponent)},

]
