import {Component} from '@angular/core';

import {CoinTableService} from './coinTable.service';

@Component({
  selector: 'coin-table',
  templateUrl: './coinTable.html',
  styleUrls: ['./coinTable.scss']
})
export class CoinTable {
  coinTableData:Array<any>;

  constructor(private _coinTablesService: CoinTableService) {
    this.coinTableData = _coinTablesService.coinTableData;
  }
}
