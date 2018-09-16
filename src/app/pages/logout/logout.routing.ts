import { Routes, RouterModule }  from '@angular/router';

import { Logout } from './logout.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Logout
  }
];

export const routing = RouterModule.forChild(routes);
