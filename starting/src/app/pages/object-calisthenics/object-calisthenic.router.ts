import { Routes } from '@angular/router';

export const ObjectCalisthenicRoutes: Routes = [
    {path: '', redirectTo: 'calisthenics', pathMatch: 'full'},
    {path: 'calisthenics', loadComponent:() => import('./object-calisthenic.component').then(cChild => cChild.ObjectCalisthenicComponent)},
    {path: 'rule1-one-indent', loadComponent:() => import('./rule1-one-indent-component/rule1-one-indent-component.component').then(cChild => cChild.Rule1OneIndentComponentComponent)},
    {path: 'rule2-dont-use-the-else-keyword', loadComponent:() => import('./rule2-dont-use-the-else-keyword/rule2-dont-use-the-else-keyword.component').then(cChild => cChild.Rule2DontUseTheElseKeywordComponent)},
    {path: 'rule3-wrap-all-primitives-and-strings', loadComponent:() => import('./rule3-wrap-all-primitives-and-strings/rule3-wrap-all-primitives-and-strings.component').then(cChild => cChild.Rule3WrapAllPrimitivesAndStringsComponent)},
    {path: 'rule4-first-class-collections', loadComponent:() => import('./rule4-first-class-collections/rule4-first-class-collections.component').then(cChild => cChild.Rule4FirstClassCollectionsComponent)},
    {path: 'rule5-one-dot-per-line', loadComponent:() => import('./rule5-one-dot-per-line/rule5-one-dot-per-line.component').then(cChild => cChild.Rule5OneDotPerLineComponent)},
    {path: 'rule6-dont-abbreviate', loadComponent:() => import('./rule6-dont-abbreviate/rule6-dont-abbreviate.component').then(cChild => cChild.Rule6DontAbbreviateComponent)},
    {path: 'rule7-keep-all-entities-small', loadComponent:() => import('./rule7-keep-all-entities-small/rule7-keep-all-entities-small.component').then(cChild => cChild.Rule7KeepAllEntitiesSmallComponent)},
    {path: 'rule8-no-more-than-two-instance-variables', loadComponent:() => import('./rule8-no-more-than-two-instance-variables/rule8-no-more-than-two-instance-variables.component').then(cChild => cChild.Rule8NoMoreThanTwoInstanceVariablesComponent)},
    {path: 'rule9-dont-use-getters-or-setters', loadComponent:() => import('./rule9-dont-use-getters-or-setters/rule9-dont-use-getters-or-setters.component').then(cChild => cChild.Rule9DontUseGettersOrSettersComponent)},

]
