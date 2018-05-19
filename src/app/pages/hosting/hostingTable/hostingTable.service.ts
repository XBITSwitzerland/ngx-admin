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
    }
  ];
}
