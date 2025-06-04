import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClassProjectComponent } from './pages/class-project/class-project.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: 'hit', pathMatch: 'full'}, //rora Padrão
    {path: 'hit', loadComponent:() => import('./pages/home/home.component').then(c => c.HomeComponent)}, //loadlazy
    {path: 'hit/levelone', loadComponent:() => import('./pages/books/level/level01/level01.component').then(c => c.Level01Component)},
    {path: 'hit/project', loadComponent:() => import('./pages/class-project/class-project.component').then(c => c.ClassProjectComponent)},
    {path: '**', loadComponent:() => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)}
    // {path: '**', redirectTo: () => {return 'not-found'}},

];
export const routesExemplo: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'project', component: ClassProjectComponent},
    {path: '**', component: NotFoundComponent}


];
