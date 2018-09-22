import {Component} from '@angular/core';

import {MinersTableService} from './minersTable.service';
import {DataService} from '../../../services/data/data.service';
import { Miner } from '../../../entities/XBitApi/miner';
import { MinerType } from '../../../entities/XBitApi/minertype';
import { XBitApiService } from '../../../services/xbitapi/xbit-api.service';
import { Algorithm } from '../../../entities/XBitApi/algorithm';
import { MinerAlgorithm } from '../../../entities/XBitApi/mineralgorithm';
import { DataType } from '../../../entities/enums/data-type';

@Component({
  selector: 'miners-table',
  templateUrl: './minersTable.html',
  styleUrls: ['./minersTable.scss']
})
export class MinersTable {

  miners: Miner[] = [];
  minerTypes: MinerType[] = [];
  minerAlgorithms: MinerAlgorithm[] = [];

  minerTableData: any[] = [];

  constructor(private dataService: DataService) {
    dataService.update(DataType.XBitApi, "Miner");
    dataService.update(DataType.XBitApi, "MinerType");
    dataService.update(DataType.XBitApi, "MinerAlgorithm");

    dataService.miners.subscribe( res => {
      this.miners = res;
    });
    dataService.minerTypes.subscribe( res => {
      this.minerTypes = res;
    });
    dataService.minerAlgorithm.subscribe( res => {
      this.minerAlgorithms = res;
    });

    this.miners.forEach(element => {
      this.minerTableData.push(this.getMinerTypeById(element.minerTypeId));
    });
  }

  private getCountOfMinersByMinerType(pid: string): any {
    let pMiners = this.miners.filter(x => x.minerTypeId == pid);
    return pMiners.length;
  }

  private getMinerTypeById(pid: string): MinerType {
    return this.minerTypes.filter(x => x.id == pid)[0];
  }

  private getMinerAlgorithmByMinerTypeId(pid: string): MinerAlgorithm {
    return this.minerAlgorithms.filter(x => x.minerTypeId == pid)[0];
  }
}
