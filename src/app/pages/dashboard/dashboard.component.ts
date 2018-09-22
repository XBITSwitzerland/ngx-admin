import { Component } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { CoinMarketCapCoin } from '../../entities/coinmarketcap-coin';
import { DataType } from '../../entities/enums/data-type';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {

  constructor(
    private dataService: DataService
  ) {
    dataService.coinMarketCapCoins.subscribe( res => {
      res.forEach(element => {
        //console.log("Coin: " + JSON.stringify(element, null, 2));
      });
    });
   }

}
