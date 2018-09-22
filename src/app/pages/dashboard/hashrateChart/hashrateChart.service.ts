import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';
import { DataService } from '../../../services/data/data.service';
import { Miner } from '../../../entities/XBitApi/miner';
import { MinerAlgorithm } from '../../../entities/XBitApi/mineralgorithm';
import { CoinAlgorithm } from '../../../entities/XBitApi/coinalgorithm';
import { MinerType } from '../../../entities/XBitApi/minertype';
import { Algorithm } from '../../../entities/XBitApi/algorithm';
import { DataType } from '../../../entities/enums/data-type';
import { XBitCoin } from '../../../entities/XBitApi/coin';

@Injectable()
export class HashrateChartService {
  miners: Miner[] = [];
  minerAlgorithm: MinerAlgorithm[] = [];
  coinAlgorithms: CoinAlgorithm[] = [];
  minerTypes: MinerType[] = [];
  algorithms: Algorithm[] = [];
  xbitCoins: XBitCoin[] = [];

  constructor(
    private _baConfig:BaThemeConfigProvider,
    private dataService: DataService
  ) {
    dataService.update(DataType.XBitApi, "XBitCoin");
    dataService.update(DataType.XBitApi, "Miner");
    dataService.update(DataType.XBitApi, "MinerAlgorithm");
    dataService.update(DataType.XBitApi, "CoinAlgorithm");
    dataService.update(DataType.XBitApi, "MinerType");
    dataService.update(DataType.XBitApi, "Algorithm");

    dataService.miners.subscribe( res => {
      this.miners = res;
    });
    dataService.minerTypes.subscribe( res => {
      this.minerTypes = res;
    });
    dataService.algorithms.subscribe( res => {
      this.algorithms = res;
    });
    dataService.minerAlgorithm.subscribe( res => {
      this.minerAlgorithm = res;
    });
  }


  getData() {
    let dashboardColors = this._baConfig.get().colors.dashboard;
    let TableData: any = [];

    this.miners.forEach(element => {
      let pCoinAlgorithm = this.coinAlgorithms.filter(x => x.id = element.coinAlgorithmId)[0];
      if(pCoinAlgorithm.algorithmId) {
        let hashrate = this.getHashrateByMinerAndAlgorithm(element.minerTypeId, pCoinAlgorithm.algorithmId);
        let coin = this.getXBitCoinById(pCoinAlgorithm.coinId);
        TableData.push({
          value: hashrate,
          color: dashboardColors.white,
          highlight: colorHelper.shade(dashboardColors.white, 15),
          label: coin.name,
          percentage: hashrate,
          hashrateSuffix: 'TH/s',
          order: 1,
        });
      }
    });

    return TableData;
  }

  getHashrateByMinerAndAlgorithm(pMinerTypeId: string, pAlgorithmId: string) {
    return this.minerAlgorithm.filter(x => x.minerTypeId == pMinerTypeId && x.algorithmId == pAlgorithmId)[0].hashrate;
  }
  getXBitCoinById(coinId: string): XBitCoin {
    return this.xbitCoins.filter(x => x.id  == coinId)[0];
  }
  getAmountOfMinerWhereMiningAlgorithm(algorithmId: string) {
    // TODO: Count only miners where are mining the current Algorithm
    return this.miners.length;
  }
}
