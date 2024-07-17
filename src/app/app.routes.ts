import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/dashboard/dashboard.component')
      .then(m => m.DashboardComponent),
    title: 'Dashboard'
  },
  {
    path: 'weather/:officeId',
    loadComponent: () => import('./pages/weather/weather.component')
      .then(m => m.WeatherComponent),
    title: 'Weather Forecast'
  },
  {
    path: '**',
    redirectTo: '',
  }
];
