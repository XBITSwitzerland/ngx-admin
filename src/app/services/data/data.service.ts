import { Injectable } from '@angular/core';
import { CoinMarketCapService } from '../coinmarketcap/coinmarketcap.service';
import { XBitApiService } from '../xbitapi/xbit-api.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

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

@Injectable()
export class DataService {

  private coinmarketcapcoinsSource = new BehaviorSubject<CoinMarketCapCoin[]>([]);
  coinmarketcapcoins = this.coinmarketcapcoinsSource.asObservable();

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

  private bitcoinSource = new BehaviorSubject<CoinMarketCapCoin[]>([]);
  bitcoin = this.bitcoinSource.asObservable();

  private ethereumSource = new BehaviorSubject<CoinMarketCapCoin[]>([]);
  ethereum = this.ethereumSource.asObservable();

  private litecoinSource = new BehaviorSubject<CoinMarketCapCoin[]>([]);
  litecoin = this.litecoinSource.asObservable();

  private ethereumClassicSource = new BehaviorSubject<CoinMarketCapCoin[]>([]);
  ethereumClassic = this.ethereumClassicSource.asObservable();

  private moneroSource = new BehaviorSubject<CoinMarketCapCoin[]>([]);
  monero = this.moneroSource.asObservable();

  private dashSource = new BehaviorSubject<CoinMarketCapCoin[]>([]);
  dash = this.dashSource.asObservable();

  private vergeSource = new BehaviorSubject<CoinMarketCapCoin[]>([]);
  verge = this.vergeSource.asObservable();

  private dogecoinSource  = new BehaviorSubject<CoinMarketCapCoin[]>([]);
  dogecoin = this.dogecoinSource.asObservable();

  private zCashSource = new BehaviorSubject<CoinMarketCapCoin[]>([]);
  zCash = this.zCashSource.asObservable();

  private digiByteSource = new BehaviorSubject<CoinMarketCapCoin[]>([]);
  digiByte = this.digiByteSource.asObservable();

  private bytecoinSource = new BehaviorSubject<CoinMarketCapCoin[]>([]);
  bytecoin = this.bytecoinSource.asObservable();

  private decredSource = new BehaviorSubject<CoinMarketCapCoin[]>([]);
  decred = this.decredSource.asObservable();

  private bitcoinGoldSource = new BehaviorSubject<CoinMarketCapCoin[]>([]);
  bitcoinGold = this.bitcoinGoldSource.asObservable();

  private siacoinSource = new BehaviorSubject<CoinMarketCapCoin[]>([]);
  siacoin = this.siacoinSource.asObservable();

  private komodoSource = new BehaviorSubject<CoinMarketCapCoin[]>([]);
  komodo = this.komodoSource.asObservable();

  private zcoinSource = new BehaviorSubject<CoinMarketCapCoin[]>([]);
  zcoin = this.zcoinSource.asObservable();

  update<T>(propertyName: string): void {
    var observable: Observable<T[]>;
    if (propertyName.toLowerCase().indexOf('coin') <= -1 && propertyName.toLocaleLowerCase() !== 'xbitcoin') {
      // use coinmarketcapService
      observable = this.coinMarketCapService['get' + propertyName]();
    } else {
      // use XBitApiSercice
      observable = this.xbitApiService['get' + propertyName]();
    }
    observable.subscribe(responseArray => {
      this[propertyName + 'Source'].next(responseArray);
    })
  }

  constructor(
    private coinMarketCapService: CoinMarketCapService,
    private xbitApiService: XBitApiService
  ) { }

}
