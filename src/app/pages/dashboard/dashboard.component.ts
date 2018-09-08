import { Component } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { CoinMarketCapCoin } from '../../entities/coinmarketcap-coin';
import { DataType } from '../../entities/enums/data-type';
import { CoinMarketCapService } from '../../services/coinmarketcap/coinmarketcap.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    if (!authenticationService.isAuthenticated()) {
      router.navigateByUrl('/login')
    }
  }

}
