import {Component} from '@angular/core';

import {CoinTableService} from './coinTable.service';

import { DataService } from '../../../services/data/data.service';
import { CoinMarketCapCoin } from '../../../entities/coinmarketcap-coin';

@Component({
  selector: 'coin-table',
  templateUrl: './coinTable.html',
  styleUrls: ['./coinTable.scss']
})
export class CoinTable {
  coinTableData: CoinMarketCapCoin[] = [];
  
  constructor(private dataService: DataService) {
    dataService.coinMarketCapCoins.subscribe( res => {
      res.forEach(element => {
        this.coinTableData.push(element);
      });
      console.log("CoinTable: " + this.coinTableData);
    });
  }
}
