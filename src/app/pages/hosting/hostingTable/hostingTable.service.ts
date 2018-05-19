import { Injectable } from '@angular/core';

@Injectable()
export class HostingTableService {
  hostingTableData = [
    {
      image: 'assets/img/miners/antminers9.png',
      name: 'Antminer S9',
      watt: 1300,
      price: 13.5,
      amount: 20,
      startdate: '27.06.2018',
      enddate: '27.06.2019'
    },
    {
      image: 'assets/img/miners/antminers9.png',
      name: 'Antminer L3+',
      watt: 800,
      price: 13.5,
      amount: 20,
      startdate: '27.06.2018',
      enddate: '27.06.2019'
    },
    {
      image: 'assets/img/miners/antminers9.png',
      name: 'Antminer D3',
      watt: 900,
      price: 11,
      amount: 20,
      startdate: '27.06.2018',
      enddate: '27.06.2019'
    }
  ];
}
