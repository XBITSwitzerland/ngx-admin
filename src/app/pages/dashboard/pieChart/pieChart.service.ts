import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'dashboard.sha256',
        stats: '135 TH/s',
        icon: 'person',
      }, {
        color: pieColor,
        description: 'dashboard.scrypt',
        stats: '1100 MH/s',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'dashboard.x11',
        stats: '76.3 GH/s',
        icon: 'face',
      }, {
        color: pieColor,
        description: 'dashboard.ethash',
        stats: '128 MH/s',
        icon: 'refresh',
      }
    ];
  }
}
