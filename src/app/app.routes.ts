import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'projects/:slug',
    loadComponent: () =>
      import('./features/project-details/project-details.component').then(
        (m) => m.ProjectDetailsComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
