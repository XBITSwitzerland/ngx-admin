import { Component } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { CoinMarketCapCoin } from '../../entities/coinmarketcap-coin';
import { CoinMarketCapService } from '../../services/coinmarketcap/coinmarketcap.service'
import { DataType } from '../../entities/enums/data-type';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {

  constructor(
    private dataService: DataService,
    private CoinMarketCapService: CoinMarketCapService
  ) { }

}
