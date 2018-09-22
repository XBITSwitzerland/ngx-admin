import {Component} from '@angular/core';

import {HashrateTableService} from './hashrateTable.service';
import { DataService } from '../../../services/data/data.service';
import { CoinMarketCapCoin } from '../../../entities/coinmarketcap-coin';

@Component({
  selector: 'hashrate-table',
  templateUrl: './hashrateTable.html',
  styleUrls: ['./hashrateTable.scss']
})
export class HashrateTable {
  coinTableData:CoinMarketCapCoin[] = [];

  constructor(private dataService: DataService) {
    dataService.coinMarketCapCoins.subscribe( res => {
      res.forEach(element => {
        this.coinTableData.push(element);
      });
      console.log("CoinTable: " + this.coinTableData);
    });
  }
}
