import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'details',
        loadComponent: () => import('./pages/details/details.component').then(m => m.DetailsComponent)
    },
    {
        path: 'search',
        loadComponent: () => import('./pages/search/search.component').then(m => m.SearchComponent)
    }
];
