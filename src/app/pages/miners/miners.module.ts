import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { Miners } from './miners.component';
import { routing } from './miners.routing';

import { TrafficChart } from './trafficChart/trafficChart.component';
import { TrafficChartService } from './trafficChart/trafficChart.service';

import { HashrateTable } from './hashrateTable/hashrateTable.component';
import { HashrateTableService } from './hashrateTable/hashrateTable.service';

import { MinersTable } from './minersTable/minersTable.component';
import { MinersTableService } from './minersTable/minersTable.service';

import { HashrateAllocation } from './hashrateAllocation/hashrateAllocation.component';
import { HashrateAllocationService } from './hashrateAllocation/hashrateAllocation.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  declarations: [
    Miners,
    HashrateTable,
    TrafficChart,
    MinersTable,
    HashrateAllocation
  ],
  providers: [
    HashrateTableService,
    TrafficChartService,
    MinersTableService,
    HashrateAllocationService
  ]
})
export class MinersModule {}