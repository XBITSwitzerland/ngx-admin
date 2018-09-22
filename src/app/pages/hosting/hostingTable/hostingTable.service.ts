import { Injectable } from '@angular/core';
import { MinerType } from '../../../entities/XBitApi/minertype';
import { Miner } from '../../../entities/XBitApi/miner';
import { HostingPeriod } from '../../../entities/XBitApi/hostingperiod';
import { DataService } from '../../../services/data/data.service';
import { DataType } from '../../../entities/enums/data-type';

@Injectable()
export class HostingTableService {

  minerTypes: MinerType[] = [];
  miners: Miner[] = [];
  hostingPeriods: HostingPeriod[] = [];

  constructor(
    private dataService: DataService
  ) {
    dataService.update(DataType.XBitApi, "MinerType");
    dataService.update(DataType.XBitApi, "Miner");
    dataService.update(DataType.XBitApi, "HostingPeriod");

    dataService.minerTypes.subscribe( res => {
      this.minerTypes = res;
    });
    dataService.miners.subscribe( res => {
      this.miners = res;
    });
    dataService.hostingPeriods.subscribe( res => {
      this.hostingPeriods = res;
    })
  }

  getHostingTableData() {
    let hostingTableData: any = [];
    this.hostingPeriods.forEach(element => {
      hostingTableData.push({
        image: 'assets/img/miners/antminers9.png',
        name: this.getMinerTypeByMinerId(element.minerId).name,
        watt: this.getMinerTypeByMinerId(element.minerId).watts,
        price: element.pricePerMonth,
        amount: 1,
        startdate: element.startDate,
        enddate: element.endDate
      });
    });
    return hostingTableData;
  }

  private getMinerCountByMinerTypeId(pid: string) {
    return this.miners.filter(x => x.minerTypeId == pid).length;
  }

  private getMinerTypeByMinerId(pMinerId: string): MinerType {
    let pminer = this.miners.filter(x => x.id == pMinerId)[0];
    return this.minerTypes.filter(x => x.id == pminer.minerTypeId)[0];
  }

}
