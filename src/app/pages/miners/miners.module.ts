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
    TrafficChart
  ],
  providers: [
    HashrateTableService,
    TrafficChartService
  ]
})
export class MinersModule {}