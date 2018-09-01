import { Component } from '@angular/core';
import { CoinmarketcapService } from '../../services/coinmarketcap/coinmarketcap.service';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {

  constructor(private service: CoinmarketcapService) {
  service.getBitCoin().subscribe((res) => {
    console.log(res);
  });
  }

}
