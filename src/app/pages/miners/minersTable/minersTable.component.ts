import {Component} from '@angular/core';

import {MinersTableService} from './minersTable.service';
import {DataService} from '../../../services/data/data.service';
import { Miner } from '../../../entities/XBitApi/miner';
import { MinerType } from '../../../entities/XBitApi/minertype';
import { XBitApiService } from '../../../services/xbitapi/xbit-api.service';
import { Algorithm } from '../../../entities/XBitApi/algorithm';

@Component({
  selector: 'miners-table',
  templateUrl: './minersTable.html',
  styleUrls: ['./minersTable.scss']
})
export class MinersTable {

  miners: Miner[] = [];
  minerTypes: MinerType[] = [];
  algorithms: Algorithm[] = [];

  minerTableData: any[] = [];


  constructor(private dataService: DataService) {
    dataService.miners.subscribe( res => {
      this.miners = res;
    });
    dataService.minerTypes.subscribe( res => {
      this.minerTypes = res;
    });
    dataService.algorithms.subscribe( res => {
      this.algorithms = res;
    });

    this.miners.forEach(element => {
      this.minerTableData.push(this.getMinerTypeById(element.minerTypeId));
    });
  }

  private getMinerTypeById(pid: string): MinerType {
    return this.minerTypes.filter(x => x.id == pid)[0];
  }

  private getAlgorithmById(pid: string): Algorithm {
    return this.algorithms.filter(x => x.id == pid)[0];
  }
}
