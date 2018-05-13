import {Component} from '@angular/core';

import {HashrateChartService} from './hashrateChart.service';
import * as Chart from 'chart.js';

@Component({
  selector: 'hashrate-chart',
  templateUrl: './hashrateChart.html',
  styleUrls: ['./hashrateChart.scss']
})

// TODO: move chart.js to it's own component
export class HashrateChart {

  public doughnutData: Array<Object>;

  constructor(private hashrateChartService:HashrateChartService) {
    this.doughnutData = hashrateChartService.getData();
  }

  ngAfterViewInit() {
    this._loadDoughnutCharts();
  }

  private _loadDoughnutCharts() {
    let el = jQuery('.chart-area-2').get(0) as HTMLCanvasElement;
    new Chart(el.getContext('2d')).Doughnut(this.doughnutData, {
      segmentShowStroke: false,
      percentageInnerCutout : 64,
      responsive: true
    });
  }
}
