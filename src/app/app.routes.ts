import { Routes } from '@angular/router';
import { BikeListComponent } from './components/bike-list/bike-list.component';
import { BikeDetailComponent } from './components/bike-detail/bike-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: BikeListComponent
  },
  {
    path: 'bike/:id',
    component: BikeDetailComponent
  },
  {
    path: '**',
    redirectTo: 'search'
  }
];
