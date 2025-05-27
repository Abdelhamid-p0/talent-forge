import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'applicants',
    pathMatch: 'full'
  },
  {
    path: 'applicants',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/applicant-list/applicant-list.component').then(
            (m) => m.ApplicantListComponent
          ),
      } ,
      {
        path: ':fullName',
        loadComponent: () =>
          import('./components/applicant-profile/applicant-profile.component').then(
            (m) => m.ApplicantProfileComponent
          ),
      }
    ]
  },
  {
    path: 'dashboard',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/recruiter-dashboard/recruiter-dashboard.component').then(
            (m) => m.RecruiterDashboardComponent
          ),
      }
    ]
  },
  {
    path: 'mock-form',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/mock-form/mock-form.component').then(
            (m) => m.MockFormComponent
          ),
      }
    ]
  }
];
