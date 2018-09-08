import { Injectable } from '@angular/core';
import { CoinMarketCapService } from '../coinmarketcap/coinmarketcap.service';
import { XBitApiService } from '../xbitapi/xbit-api.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { DataType } from '../../entities/enums/data-type';
import { CoinMarketCapCoinName } from '../../entities/enums/coinmarketcap-coin-name';

import { CoinMarketCapCoin } from '../../entities/coinmarketcap-coin';
import { Address } from '../../entities/XBitApi/address';
import { Administrator } from '../../entities/XBitApi/administrator';
import { Algorithm } from '../../entities/XBitApi/algorithm';
import { Balance } from '../../entities/XBitApi/balance';
import { XBitCoin } from '../../entities/XBitApi/coin';
import { Country } from '../../entities/XBitApi/country';
import { Customer } from '../../entities/XBitApi/customer';
import { HostingPeriod } from '../../entities/XBitApi/hostingperiod';
import { Location } from '../../entities/XBitApi/location';
import { Manufacturer } from '../../entities/XBitApi/manufacturer';
import { Miner } from '../../entities/XBitApi/miner';
import { MinerType } from '../../entities/XBitApi/minertype';
import { MiningFarm } from '../../entities/XBitApi/miningfarm';
import { UserInformation } from '../../entities/XBitApi/userinformation';

import 'rxjs/add/observable/forkJoin';
import { MinerAlgorithm } from '../../entities/XBitApi/mineralgorithm';

@Injectable()
export class DataService {

  private addressesSource = new BehaviorSubject<Address[]>([]);
  adresses = this.addressesSource.asObservable();

  private administratorsSource = new BehaviorSubject<Administrator[]>([]);
  administrators = this.administratorsSource.asObservable();

  private algorithmsSource = new BehaviorSubject<Algorithm[]>([]);
  algorithms = this.algorithmsSource.asObservable();

  private balancesSource = new BehaviorSubject<Balance[]>([]);
  balances = this.balancesSource.asObservable();

  private xbitcoinsSource = new BehaviorSubject<XBitCoin[]>([]);
  xbitcoins = this.xbitcoinsSource.asObservable();

  private countriesSource = new BehaviorSubject<Country[]>([]);
  countries = this.countriesSource.asObservable();

  private customersSource = new BehaviorSubject<Customer[]>([]);
  customers = this.customersSource.asObservable();

  private hostingPeriodsSource = new BehaviorSubject<HostingPeriod[]>([]);
  hostingPeriods = this.hostingPeriodsSource.asObservable();

  private locationsSource = new BehaviorSubject<Location[]>([]);
  locations = this.locationsSource.asObservable();

  private manufacturersSource = new BehaviorSubject<Manufacturer[]>([]);
  manufacturers = this.manufacturersSource.asObservable();

  private minersSource = new BehaviorSubject<Miner[]>([]);
  miners = this.minersSource.asObservable();

  private minerTypesSource = new BehaviorSubject<MinerType[]>([]);
  minerTypes = this.minerTypesSource.asObservable();

  private miningFarmsSource = new BehaviorSubject<MiningFarm[]>([]);
  miningFarms = this.miningFarmsSource.asObservable();

  private userInformationsSource = new BehaviorSubject<UserInformation[]>([]);
  userInformations = this.userInformationsSource.asObservable();

  /* Coinmarketcap Coins */ 
  private coinMarketCapCoinsSource = new BehaviorSubject<CoinMarketCapCoin[]>([]);
  coinMarketCapCoins = this.coinMarketCapCoinsSource.asObservable();

  private minerAlgorithmSource = new BehaviorSubject<MinerAlgorithm[]>([]);
  minerAlgorithm = this.minerAlgorithmSource.asObservable();

  update<T>(dataType: DataType, controllerName: string): void {
    switch (dataType) {
      case DataType.CoinMarketCap:
        var observables: Observable<CoinMarketCapCoin>[] = [];

        for (var coin in CoinMarketCapCoinName) {
          if (isNaN(coin as any)) {
            observables.push(this.coinMarketCapService['get' + coin]());
          }
        }

        Observable.forkJoin(observables).subscribe(coins => {
          this.coinMarketCapCoinsSource.next(coins);
        });
        break;

      case DataType.XBitApi:
        if (controllerName) {
          controllerName = controllerName.toLowerCase();
          var controller = controllerName.charAt(0).toUpperCase() + controllerName.slice(1);
          var getFunction = this.xbitApiService['get' + controller + 's'];

          if (getFunction) {
            getFunction(this.xbitApiService).subscribe(response => {
              (this[controllerName + 'Source'] as BehaviorSubject<T[]>).next(response);
            });
          }
        }
        break;
    }
  }

  constructor(
    private coinMarketCapService: CoinMarketCapService,
    public xbitApiService: XBitApiService
  ) {
    this.update(DataType.CoinMarketCap, "");
   }
}
