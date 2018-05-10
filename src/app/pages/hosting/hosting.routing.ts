import { Routes, RouterModule }  from '@angular/router';

import { Hosting } from './hosting.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Hosting
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
