import {Component} from '@angular/core';

import {MinersTableService} from './minersTable.service';
import {DataService} from '../../../services/data/data.service';
import { Miner } from '../../../entities/XBitApi/miner';
import { MinerType } from '../../../entities/XBitApi/minertype';

@Component({
  selector: 'miners-table',
  templateUrl: './minersTable.html',
  styleUrls: ['./minersTable.scss']
})
export class MinersTable {
  minersTableData:Array<any>;

  miners: Miner[];
  minerTypes: MinerType[];


  constructor(private dataService: DataService, private _minersTableService: MinersTableService) {
    this.minersTableData = _minersTableService.minersTableData;


  }
}
