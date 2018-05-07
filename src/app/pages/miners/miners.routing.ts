import { Routes, RouterModule }  from '@angular/router';

import { Miners } from './miners.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Miners
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
