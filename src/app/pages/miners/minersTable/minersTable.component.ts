import {Component} from '@angular/core';

import {MinersTableService} from './minersTable.service';

@Component({
  selector: 'miners-table',
  templateUrl: './minersTable.html',
  styleUrls: ['./minersTable.scss']
})
export class MinersTable {
  minersTableData:Array<any>;

  constructor(private _minersTableService: MinersTableService) {
    this.minersTableData = _minersTableService.minersTableData;
  }
}
