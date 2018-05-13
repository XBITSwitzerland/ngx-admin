import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { FormsModule as AngularFormsModule } from '@angular/forms';

import { Balances } from './balances.component';
import { routing } from './balances.routing';
import { BalanceTable } from './balanceTable/balanceTable.component';
import { BalanceTableService } from './balanceTable/balanceTable.service';

@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    routing,
    NgaModule,
    AppTranslationModule
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