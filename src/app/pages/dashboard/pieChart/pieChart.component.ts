import {Component} from '@angular/core';

import {PieChartService} from './pieChart.service';

import 'easy-pie-chart/dist/jquery.easypiechart.js';
import { Algorithm } from '../../../entities/XBitApi/algorithm';
import { DataService } from '../../../services/data/data.service';
import { DataType } from '../../../entities/enums/data-type';
import { Data } from '../../../entities/XBitApi/data';
import { MinerAlgorithm } from '../../../entities/XBitApi/mineralgorithm';
import { Miner } from '../../../entities/XBitApi/miner';

@Component({
  selector: 'pie-chart',
  templateUrl: './pieChart.html',
  styleUrls: ['./pieChart.scss']
})
// TODO: move easypiechart to component
export class PieChart {

  public charts: Array<Object>;
  private _init = false;
  public chartColor: string;

  public minerAlgorithms: MinerAlgorithm[] = [];
  public algorithms: Algorithm[] = [];
  private miners: Miner[] = [];

  constructor(
    private dataService: DataService
  ) {
    dataService.update(DataType.XBitApi, "Algorithm");
    dataService.algorithms.subscribe( res => {
      this.algorithms = res;
      console.log("Algorithms:" + JSON.stringify(res));
    });


    this.chartColor = "#ccc";
  }

  public getHashrateOfAlgorithm(pid: string): any {
    let hashrate: number = 0;
    let pminerAlgorithms = this.minerAlgorithms.filter(x => x.algorithmId == pid);
    pminerAlgorithms.forEach(element => {
      let minersCount = this.miners.filter(x => x.minerTypeId == element.minerTypeId).length;
      hashrate += minersCount * element.hashrate;
    });
    return hashrate;
  }

  public getMinerCountOfAlgorithm(pid: string): any {
    let minersCount: number = 0;
    let pminerAlgorithms = this.minerAlgorithms.filter(x => x.algorithmId == pid);
    pminerAlgorithms.forEach(element => {
      minersCount += this.miners.filter(x => x.minerTypeId == element.minerTypeId).length;
    });
    return minersCount;
  }

  ngAfterViewInit() {
    if (!this._init) {
      this._loadPieCharts();
      this._updatePieCharts();
      this._init = true;
    }
  }

  private _loadPieCharts() {

    jQuery('.chart').each(function () {
      let chart = jQuery(this);
      chart.easyPieChart({
        easing: 'easeOutBounce',
        onStep: function (from, to, percent) {
          jQuery(this.el).find('.percent').text(Math.round(percent));
        },
        barColor: jQuery(this).attr('data-rel'),
        trackColor: 'rgba(0,0,0,0)',
        size: 84,
        scaleLength: 0,
        animation: 2000,
        lineWidth: 9,
        lineCap: 'round',
      });
    });
  }

  private _updatePieCharts() {
    let getRandomArbitrary = (min, max) => { return Math.random() * (max - min) + min; };

    jQuery('.pie-charts .chart').each(function(index, chart) {
      jQuery(chart).data('easyPieChart').update(getRandomArbitrary(20, 40));
    });
  }
}
