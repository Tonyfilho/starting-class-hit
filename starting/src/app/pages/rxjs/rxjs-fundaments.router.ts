import { Routes } from '@angular/router';

export const rxJsFundamentsRoutes: Routes = [
    {path: '', redirectTo: 'rxjs-fundaments', pathMatch: 'full'},
    {path: '', loadComponent:() => import('./rxjs.component').then(c => c.RxjsComponent)},


]
