import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { PopularApp } from './popularApp';
import { PieChart } from './pieChart';
import { TrafficChart } from './trafficChart';
import { UsersMap } from './usersMap';
import { LineChart } from './lineChart';
import { LineChartService } from './lineChart/lineChart.service';
import { PieChartService } from './pieChart/pieChart.service';
import { TrafficChartService } from './trafficChart/trafficChart.service';
import { UsersMapService } from './usersMap/usersMap.service';
import { CoinTable } from './coinTable/coinTable.component';
import { CoinTableService } from './coinTable/coinTable.service';
import { HashrateChart } from './hashrateChart/hashrateChart.component';
import { HashrateChartService } from './hashrateChart/hashrateChart.service';

import { CoinMarketCapService } from '../../services/coinmarketcap/coinmarketcap.service';

import { GenericHttpService } from '../../services/generichttp/generic-http.service';
import { XBitApiService } from '../../services/xbitapi/xbit-api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  declarations: [
    CoinTable,
    PopularApp,
    PieChart,
    TrafficChart,
    UsersMap,
    LineChart,
    Dashboard,
    HashrateChart
  ],
  providers: [
    LineChartService,
    PieChartService,
    TrafficChartService,
    UsersMapService,
    CoinTableService,
    HashrateChartService,
    CoinMarketCapService,
    GenericHttpService,
    XBitApiService
  ]
})
export class DashboardModule {}
