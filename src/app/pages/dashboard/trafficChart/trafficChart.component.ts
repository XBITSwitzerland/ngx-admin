import {Component} from '@angular/core';

import {TrafficChartService} from './trafficChart.service';
import * as Chart from 'chart.js';
import { DataService } from '../../../services/data/data.service';

@Component({
  selector: 'traffic-chart',
  templateUrl: './trafficChart.html',
  styleUrls: ['./trafficChart.scss']
})

// TODO: move chart.js to it's own component
export class TrafficChart {

  public doughnutData: Array<Object>;

  constructor(
    private trafficChartService:TrafficChartService, 
    private dataService: DataService
  ) {
    this.doughnutData = trafficChartService.getData();
  }

  ngAfterViewInit() {
    this._loadDoughnutCharts();
  }

  private _loadDoughnutCharts() {
    let el = jQuery('.chart-area').get(0) as HTMLCanvasElement;
    new Chart(el.getContext('2d')).Doughnut(this.doughnutData, {
      segmentShowStroke: false,
      percentageInnerCutout : 64,
      responsive: true
    });
  }
}
