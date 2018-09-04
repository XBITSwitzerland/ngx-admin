import { Component } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { CoinMarketCapCoin } from '../../entities/coinmarketcap-coin';
import { CoinMarketCapService } from '../../services/coinmarketcap/coinmarketcap.service'

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  CoinArray: CoinMarketCapCoin[] = [];
  bitcoin: CoinMarketCapCoin;

  constructor(private DataService: DataService, private CoinMarketCapService: CoinMarketCapService) {
    this.CoinMarketCapService.getBitcoin().subscribe( res => {
      this.bitcoin = res;
    });

    this.CoinArray.push(this.bitcoin);
  }

}
