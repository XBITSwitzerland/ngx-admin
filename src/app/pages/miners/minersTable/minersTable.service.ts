import { Injectable } from '@angular/core';

@Injectable()
export class MinersTableService {
  minersTableData = [
    {
      image: 'miners/antminers9.png',
      name: 'Antminer S9',
      hashrate: 13.5,
      hashrateSuffix: "TH/s",
      algorithm: "SHA-256",
      pieces: 20
    },{
      image: 'miners/antminers9.png',
      name: 'Antminer S9',
      hashrate: 14,
      hashrateSuffix: "TH/s",
      algorithm: "SHA-256",
      pieces: 4
    },{
      image: 'miners/antminers9.png',
      name: 'Antminer L3+',
      hashrate: 505,
      hashrateSuffix: "MH/s",
      algorithm: "SCRYPT",
      pieces: 43
    },{
      image: 'miners/antminers9.png',
      name: 'Antminer E3',
      hashrate: 180,
      hashrateSuffix: "MH/s",
      algorithm: "ETHASH",
      pieces: 20
    },
  ];
}
