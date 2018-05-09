import { Routes, RouterModule }  from '@angular/router';

import { Profile } from './profile.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Profile
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
