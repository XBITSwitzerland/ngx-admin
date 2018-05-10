import { Routes, RouterModule }  from '@angular/router';

import { Balances } from './balances.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Balances
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
