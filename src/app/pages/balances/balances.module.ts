import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Balances } from './balances.component';
import { routing } from './balances.routing';
import { BalanceTable } from './balanceTable/balanceTable.component';
import { BalanceTableService } from './balanceTable/balanceTable.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    Balances,
    BalanceTable
  ],
  providers: [
    BalanceTableService
  ]
})
export class BalancesModule {}