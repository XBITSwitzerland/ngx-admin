import {Component} from '@angular/core';
import {BalanceTableService} from './balanceTable.service';

import { DataService } from '../../../services/data/data.service';
import { CoinMarketCapCoin } from '../../../entities/coinmarketcap-coin';

@Component({
  selector: 'balance-table',
  templateUrl: './balanceTable.html',
  styleUrls: ['./balanceTable.scss']
})
export class BalanceTable {
  balanceTableData: CoinMarketCapCoin[] = [];

  constructor(private dataService: DataService) {
    dataService.coinMarketCapCoins.subscribe( res => {
      res.forEach(element => {
        this.balanceTableData.push(element);
      });
      console.log("CoinTable: " + this.balanceTableData);
    });
  }
}
