import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { GenericHttpService } from '../generichttp/generic-http.service';
import { getTypeNameForDebugging } from '@angular/core/src/change_detection/differs/iterable_differs';
import { CoinMarketCapCoin } from '../../entities/coinmarketcap-coin';

@Injectable()

export class CoinmarketcapService {

    baseUrl = "https://api.coinmarketcap.com/v2/"

    getTicker(id: string) {
      var url = this.baseUrl + '/ticker/' + id + '/';
      return this.genericHttpService.getOne<CoinMarketCapCoin>(url, CoinMarketCapCoin);
    }

    // These Coins are minable for Customers
    getBitcoin() {
      return this.getTicker("1");
    }

    getEthereum() {
      return this.getTicker("1027");
    }

    getLitecoin() {
      return this.getTicker("2");
    }

    getEthereumClassic() {
      return this.getTicker("1321");
    }

    getMonero() {
      return this.getTicker("328");
    }

    getDash() {
      return this.getTicker("131");
    }

    getVerge() {
      return this.getTicker("693");
    }

    getDogecoin() {
      return this.getTicker("74");
    }

    getZCash() {
      return this.getTicker("1473");
    }

    getDigibyte() {
      return this.getTicker("109");
    }

    // These Coins are not minable in the current version
    getBytecoin() {
      return this.getTicker("372");
    }

    getDecred() {
      return this.getTicker("1168");
    }

    getBitcoingold() {
      return this.getTicker("2083");
    }

    getSiacoin() {
      return this.getTicker("1042");
    }

    getKomodo() {
      return this.getTicker("1521");
    }

    getZcoin() {
      return this.getTicker("1414");
    }

  constructor(private genericHttpService: GenericHttpService) { }

}
