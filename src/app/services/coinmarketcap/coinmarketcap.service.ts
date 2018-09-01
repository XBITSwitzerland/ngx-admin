import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { GenericHttpService } from '../generichttp/generic-http.service';
import { getTypeNameForDebugging } from '@angular/core/src/change_detection/differs/iterable_differs';
import { CoinMarketCapCoin } from '../../entities/coinmarketcap-coin';

@Injectable()

export class CoinmarketcapService {

    baseUrl = "https://api.coinmarketcap.com/v2/"

    public getTicker(id: string): Observable<CoinMarketCapCoin> {
      var url = this.baseUrl + '/ticker/' + id + '/';
      return this.genericHttpService.getOne<CoinMarketCapCoin>(url, CoinMarketCapCoin);
    }

    // These Coins are minable for Customers
    public getBitcoin(): Observable<CoinMarketCapCoin> {
      return this.getTicker("1");
    }

    public getEthereum(): Observable<CoinMarketCapCoin> {
      return this.getTicker("1027");
    }

    public getLitecoin(): Observable<CoinMarketCapCoin> {
      return this.getTicker("2");
    }

    public getEthereumClassic(): Observable<CoinMarketCapCoin> {
      return this.getTicker("1321");
    }

    public getMonero(): Observable<CoinMarketCapCoin> {
      return this.getTicker("328");
    }

    public getDash(): Observable<CoinMarketCapCoin> {
      return this.getTicker("131");
    }

    public getVerge(): Observable<CoinMarketCapCoin> {
      return this.getTicker("693");
    }

    public getDogecoin(): Observable<CoinMarketCapCoin> {
      return this.getTicker("74");
    }

    public getZCash(): Observable<CoinMarketCapCoin> {
      return this.getTicker("1473");
    }

    public getDigibyte(): Observable<CoinMarketCapCoin> {
      return this.getTicker("109");
    }

    // These Coins are not minable in the current version
    public getBytecoin(): Observable<CoinMarketCapCoin> {
      return this.getTicker("372");
    }

    public getDecred(): Observable<CoinMarketCapCoin> {
      return this.getTicker("1168");
    }

    public getBitcoingold(): Observable<CoinMarketCapCoin> {
      return this.getTicker("2083");
    }

    public getSiacoin(): Observable<CoinMarketCapCoin> {
      return this.getTicker("1042");
    }

    public getKomodo(): Observable<CoinMarketCapCoin> {
      return this.getTicker("1521");
    }

    public getZcoin(): Observable<CoinMarketCapCoin> {
      return this.getTicker("1414");
    }

  constructor(private genericHttpService: GenericHttpService) { }

}
