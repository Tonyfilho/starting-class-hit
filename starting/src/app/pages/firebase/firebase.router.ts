import { Routes } from '@angular/router';

export const firebaseRoutes: Routes = [
    {path: '', redirectTo: 'firebase', pathMatch: 'full'},
    {path: '', loadComponent:() => import('./firebase.component').then(cChild => cChild.FirebaseComponent)},
    {path: 'init-with-hosting', loadComponent:() => import('./init-with-hosting/init-with-hosting.component').then(cChild => cChild.InitWithHostingComponent)},
    {path: 'authentication', loadComponent:() => import('./authentication/auth.component').then(cChild => cChild.AuthComponent)},

]
