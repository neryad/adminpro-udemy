import { RouterModule, Routes } from '@angular/router';
import { Graficas1Component } from '../pages/graficas1/graficas1.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const pagesRoutes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: Graficas1Component },
      { path: 'account-settings', component: AccountSettingsComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
   }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
