import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'miners', loadChildren: './miners/miners.module#MinersModule' },
      { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
      { path: 'hosting', loadChildren: './hosting/hosting.module#HostingModule' },
      { path: 'balances', loadChildren: './balances/balances.module#BalancesModule' },
      { path: 'logout', loadChildren: './logout/logout.module#LogoutModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
