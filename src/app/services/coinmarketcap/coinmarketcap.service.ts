import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { GenericHttpService } from '../generichttp/generic-http.service';
import { getTypeNameForDebugging } from '@angular/core/src/change_detection/differs/iterable_differs';
import { CoinMarketCapCoin } from '../../entities/coinmarketcap-coin';

@Injectable()

export class CoinMarketCapService {

    baseUrl = "https://api.coinmarketcap.com/v2/"

    private getTicker(id: string): Observable<CoinMarketCapCoin> {
      var url = this.baseUrl + '/ticker/' + id + '/';
      return this.genericHttpService.getOne<CoinMarketCapCoin>(url, CoinMarketCapCoin);
    }

    // These Coins are minable for Customers
    getBitcoin(): Observable<CoinMarketCapCoin> {
      return this.getTicker("1");
    }

    getEthereum(): Observable<CoinMarketCapCoin> {
      return this.getTicker("1027");
    }

    getLitecoin(): Observable<CoinMarketCapCoin> {
      return this.getTicker("2");
    }

    getEthereumClassic(): Observable<CoinMarketCapCoin> {
      return this.getTicker("1321");
    }

    getMonero(): Observable<CoinMarketCapCoin> {
      return this.getTicker("328");
    }

    getDash(): Observable<CoinMarketCapCoin> {
      return this.getTicker("131");
    }

    getVerge(): Observable<CoinMarketCapCoin> {
      return this.getTicker("693");
    }

    getDogecoin(): Observable<CoinMarketCapCoin> {
      return this.getTicker("74");
    }

    getZCash(): Observable<CoinMarketCapCoin> {
      return this.getTicker("1473");
    }

    getDigibyte(): Observable<CoinMarketCapCoin> {
      return this.getTicker("109");
    }

    // These Coins are not minable in the current version
    getBytecoin(): Observable<CoinMarketCapCoin> {
      return this.getTicker("372");
    }

    getDecred(): Observable<CoinMarketCapCoin> {
      return this.getTicker("1168");
    }

    getBitcoingold(): Observable<CoinMarketCapCoin> {
      return this.getTicker("2083");
    }

    getSiacoin(): Observable<CoinMarketCapCoin> {
      return this.getTicker("1042");
    }

    getKomodo(): Observable<CoinMarketCapCoin> {
      return this.getTicker("1521");
    }

    getZcoin(): Observable<CoinMarketCapCoin> {
      return this.getTicker("1414");
    }

  constructor(private genericHttpService: GenericHttpService) { }

}
