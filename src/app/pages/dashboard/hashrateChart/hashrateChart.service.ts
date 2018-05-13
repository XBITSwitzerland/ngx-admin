import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class HashrateChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }


  getData() {
    let dashboardColors = this._baConfig.get().colors.dashboard;
    return [
      {
        value: 27.5,
        color: dashboardColors.white,
        highlight: colorHelper.shade(dashboardColors.white, 15),
        label: 'Bitcoin',
        percentage: 20,
        hashrateSuffix: 'TH/s',
        order: 1,
      }, {
        value: 55,
        color: dashboardColors.gossip,
        highlight: colorHelper.shade(dashboardColors.gossip, 15),
        label: 'Bitcoin Cash',
        percentage: 35,
        hashrateSuffix: 'TH/s',
        order: 2,
      }, {
        value: 65.5,
        color: dashboardColors.gossip,
        highlight: colorHelper.shade(dashboardColors.gossip, 15),
        label: 'Digibyte',
        percentage: 45,
        hashrateSuffix: 'TH/s',
        order: 3,
      }
    ];
  }
}
