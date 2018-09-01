import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { GenericHttpService } from '../generichttp/generic-http.service';
import { getTypeNameForDebugging } from '@angular/core/src/change_detection/differs/iterable_differs';
import { CoinMarketCapCoin } from '../../entities/coinmarketcap-coin';

@Injectable()

export class CoinmarketcapService {

    baseUrl = "https://api.coinmarketcap.com/v2/"

    public getTicker(id: string) {
      var url = this.baseUrl + '/ticker/' + id + '/';
      return this.genericHttpService.getOne<CoinMarketCapCoin>(url, CoinMarketCapCoin);
    }

    // These Coins are minable for Customers
    public getBitcoin() {
      return this.getTicker("1");
    }

    public getEthereum() {
      return this.getTicker("1027");
    }

    public getLitecoin() {
      return this.getTicker("2");
    }

    public getEthereumClassic() {
      return this.getTicker("1321");
    }

    public getMonero() {
      return this.getTicker("328");
    }

    public getDash() {
      return this.getTicker("131");
    }

    public getVerge() {
      return this.getTicker("693");
    }

    public getDogecoin() {
      return this.getTicker("74");
    }

    public getZCash() {
      return this.getTicker("1473");
    }

    public getDigibyte() {
      return this.getTicker("109");
    }

    // These Coins are not minable in the current version
    public getBytecoin() {
      return this.getTicker("372");
    }

    public getDecred() {
      return this.getTicker("1168");
    }

    public getBitcoingold() {
      return this.getTicker("2083");
    }

    public getSiacoin() {
      return this.getTicker("1042");
    }

    public getKomodo() {
      return this.getTicker("1521");
    }

    public getZcoin() {
      return this.getTicker("1414");
    }

  constructor(private genericHttpService: GenericHttpService) { }

}
