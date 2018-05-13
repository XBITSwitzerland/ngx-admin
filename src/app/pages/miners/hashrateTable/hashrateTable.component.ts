import {Component} from '@angular/core';

import {HashrateTableService} from './hashrateTable.service';

@Component({
  selector: 'hashrate-table',
  templateUrl: './hashrateTable.html',
  styleUrls: ['./hashrateTable.scss']
})
export class HashrateTable {
  hashrateTableData:Array<any>;

  constructor(private _hashrateTableService: HashrateTableService) {
    this.hashrateTableData = _hashrateTableService.hashrateTableData;
  }
}
