import { Component } from '@angular/core';
import { CoinMarketCapService } from '../../services/coinmarketcap/coinmarketcap.service';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {

  constructor(private service: CoinMarketCapService) {
  service.getBitcoin().subscribe((res) => {
    console.log(res);
  });
  }

}
