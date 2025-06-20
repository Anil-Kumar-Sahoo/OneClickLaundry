import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { InformationComponent } from './pages/information/information.component';
import { CustomersComponent } from './pages/customers/customers.component';

import { GstComponent } from './pages/report/gst/gst.component';
import { DropCustomersComponent } from './pages/report/drop-customers/drop-customers.component';
import { AchievedOrdersComponent } from './pages/achieved-orders/achieved-orders.component';
import { AdminPageNotFoundComponent } from './components/admin-page-not-found/admin-page-not-found.component';
import { PublicPageNotFoundComponent } from './components/public-page-not-found/public-page-not-found.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { SalesComponent } from './pages/report/sales/sales.component';
import { MonthWiseCatagoriesComponent } from './pages/report/month-wise-catagories/month-wise-catagories.component';
import { CanceledOrdersComponent } from './pages/report/canceled-orders/canceled-orders.component';
import { PricesComponent } from './pages/prices/prices.component';
import { ChangePasswordComponent } from './pages/auth/change-password/change-password.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },

      {
        path: 'change-password',
        component: ChangePasswordComponent,
      },

      {
        path: 'dashboard',
        component: AdminDashboardComponent,
      },
      {
        path: 'information',
        component: InformationComponent,
      },
      {
        path: 'customers',
        component: CustomersComponent,
      },
      {
        path: 'prices',
        component: PricesComponent,
      },

      {
        path: 'sales',
        component: SalesComponent,
      },
      {
        path: 'gst',
        component: GstComponent,
      },
      {
        path: 'drop-customers',
        component: DropCustomersComponent,
      },
      {
        path: 'month-wise-categories',
        component: MonthWiseCatagoriesComponent,
      },
      {
        path: 'canceled-orders',
        component: CanceledOrdersComponent,
      },
      {
        path: 'achieved-orders',
        component: AchievedOrdersComponent,
      },

      {
        path: '**',
        component: AdminPageNotFoundComponent,
      },
    ],
  },
  {
    path: '**',
    component: PublicPageNotFoundComponent,
  },
];
