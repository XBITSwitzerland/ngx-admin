import { Component } from '@angular/core';
import { CoingeckoService } from '../../services/coingecko/coingecko.service';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {

  constructor(private service: CoingeckoService) {
    service.getPing().subscribe(answer=>{
      console.log(answer);
    });
  }

}
