import { Injectable } from '@angular/core';

@Injectable()
export class BalanceTableService {
  balanceTableData = [
    {
      image: 'assets/img/coins/bitcoin.jpg',
      name: 'Bitcoin',
      shortname: 'BTC',
      price: 9650,
      change: 11.5,
      isPriceUp: true,
      balance: 0.876,
      wallet: 'asdf'
    }
  ];
}
