import { Component } from '@angular/core';
import { CoinmarketCapService } from '../../services/coinmarketcap/coinmarketcap.service';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {

  constructor(private service: CoinmarketCapService) {
  service.getBitcoin().subscribe((res) => {
    console.log(res);
  });
  }

}
