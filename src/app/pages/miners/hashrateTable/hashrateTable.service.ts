import { Injectable } from '@angular/core';

@Injectable()
export class HashrateTableService {
  hashrateTableData = [
    {
      image: 'coins/bitcoin.jpg',
      name: 'Bitcoin',
      shortName: 'BTC',
      price: 10392,
      change: 1.54,
      isPriceUp: true,
      balance: 0.738,
      hashrate: 13.5,
      hashrateSuffix: "TH/s",
      minedLast: 0.0456
    },
    {
      image: 'coins/digibyte.png',
      name: 'Ethereum',
      shortName: 'ETH',
      price: 760,
      change: 5.54,
      isPriceUp: true,
      balance: 3.578,
      hashrate: 13.5,
      hashrateSuffix: "TH/s",
      minedLast: 0.456
    },
    {
      image: 'coins/litecoin.jpg',
      name: 'Litecoin',
      shortName: 'LTC',
      price: 145,
      change: 8.54,
      isPriceUp: true,
      balance: 12.748,
      hashrate: 13.5,
      hashrateSuffix: "TH/s",
      minedLast: 3.578
    },
    {
      image: 'coins/monero.png',
      name: 'Monero',
      shortName: 'XMR',
      price: 256,
      change: 9.54,
      isPriceUp: true,
      balance: 2.578,
      hashrate: 13.5,
      hashrateSuffix: "TH/s",
      minedLast: 0.738
    },
    {
      image: 'coins/verge.jpg',
      name: 'Verge',
      shortName: 'XVG',
      price: 0.078,
      change: 23.54,
      isPriceUp: true,
      balance: 29004.483,
      hashrate: 13.5,
      hashrateSuffix: "TH/s",
      minedLast: 1479.83
    }
  ];
}
