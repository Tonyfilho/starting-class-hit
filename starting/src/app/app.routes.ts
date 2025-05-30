import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClassProjectComponent } from './pages/class-project/class-project.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'}, //rora Padrão
    {path: 'home', loadComponent:() => import('./pages/home/home.component').then(c => c.HomeComponent)}, //loadlazy
    {path: 'project', loadComponent:() => import('./pages/class-project/class-project.component').then(c => c.ClassProjectComponent)},
    {path: '**', loadComponent:() => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)}
    // {path: '**', redirectTo: () => {return 'not-found'}},
    
];
export const routesExemplo: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'}, //rora Padrão
    {path: 'home', component: HomeComponent}, 
    {path: 'project', component: ClassProjectComponent},
    {path: '**', component: NotFoundComponent}
   
    
];
