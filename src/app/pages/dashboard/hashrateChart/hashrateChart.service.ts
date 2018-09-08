import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';
import { DataService } from '../../../services/data/data.service';
import { Miner } from '../../../entities/XBitApi/miner';
import { MinerAlgorithm } from '../../../entities/XBitApi/mineralgorithm';
import { CoinAlgorithm } from '../../../entities/XBitApi/coinalgorithm';
import { MinerType } from '../../../entities/XBitApi/minertype';
import { Algorithm } from '../../../entities/XBitApi/algorithm';

@Injectable()
export class HashrateChartService {
  miners: Miner[] = [];
  minerAlgorithm: MinerAlgorithm[] = [];
  coinAlgorithms: CoinAlgorithm[] = [];
  minerTypes: MinerType[] = [];
  algorithms: Algorithm[] = [];

  constructor(
    private _baConfig:BaThemeConfigProvider,
    private dataService: DataService
  ) {
    
  }


  getData() {
    let dashboardColors = this._baConfig.get().colors.dashboard;
    let TableData: any = [];

    this.miners.forEach(element => {
      let pCoinAlgorithm = this.coinAlgorithms.filter(x => x.id = element.coinAlgorithmId)[0];
      pCoinAlgorithm.algorithmId
    });

    TableData.push({
      value: 27.5,
      color: dashboardColors.white,
      highlight: colorHelper.shade(dashboardColors.white, 15),
      label: 'Bitcoin',
      percentage: 20,
      hashrateSuffix: 'TH/s',
      order: 1,
    });

    return TableData;
  }
}
