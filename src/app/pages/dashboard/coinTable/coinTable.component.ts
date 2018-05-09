import {Component} from '@angular/core';
import {CoinTableService} from './coinTable.service';

@Component({
  selector: 'coin-table',
  templateUrl: './coinTable.html',
  styleUrls: ['./coinTable.scss']
})
export class CoinTable {
  ngOnInit() {
    
  }
  coinTableData:Array<any>;

  constructor(private _basicTablesService: CoinTableService) {
    this.coinTableData = _basicTablesService.coinTableData;
  }
}
