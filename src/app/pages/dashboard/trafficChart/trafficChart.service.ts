import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';
import { DataService } from '../../../services/data/data.service';
import { MinerType } from '../../../entities/XBitApi/minertype';
import { Miner } from '../../../entities/XBitApi/miner';

@Injectable()
export class TrafficChartService {
  minerTypes: MinerType[] = [];
  miners: Miner[] = [];


  constructor(private _baConfig:BaThemeConfigProvider, dataService: DataService) {
    dataService.minerTypes.subscribe( res => {
      this.minerTypes = res;
    });
    dataService.miners.subscribe( res => {
      this.miners = res;
    });
  }

  private getMinerCountByMinerType(pMinerTypeId: string) {
    return this.miners.filter(x => x.minerTypeId == pMinerTypeId).length;
  }


  getData() {
    let dashboardColors = this._baConfig.get().colors.dashboard;

    let TableData: any[] = [];
    let tableOrder = 0;

    this.minerTypes.forEach(element => {
      // Amount of Miners by this MinerType
      let amountMiners = this.getMinerCountByMinerType(element.id);
      tableOrder += 1;
      // Push new Element to the TableData Array
      TableData.push({
        value: amountMiners,
        color: dashboardColors.white,
        highlight: colorHelper.shade(dashboardColors.blueStone, 15),
        label: element.name,
        percentage: amountMiners,
        order: tableOrder
      });
    });

    
    return TableData;
  }
}
