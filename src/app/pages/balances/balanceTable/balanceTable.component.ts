import {Component} from '@angular/core';
import {BalanceTableService} from './balanceTable.service';

@Component({
  selector: 'balance-table',
  templateUrl: './balanceTable.html',
  styleUrls: ['./balanceTable.scss']
})
export class BalanceTable {
  balanceTableData:Array<any>;

  constructor(private _balanceTablesService: BalanceTableService) {
    this.balanceTableData = _balanceTablesService.balanceTableData;
  }
}
