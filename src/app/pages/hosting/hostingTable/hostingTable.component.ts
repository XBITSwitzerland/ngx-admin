import {Component} from '@angular/core';
import {HostingTableService} from './hostingTable.service';

@Component({
  selector: 'hosting-table',
  templateUrl: './hostingTable.html',
  styleUrls: ['./hostingTable.scss']
})
export class HostingTable {
  hostingTableData:Array<any>;

  constructor(private _hostingTablesService: HostingTableService) {
    this.hostingTableData = _hostingTablesService.hostingTableData;
  }
}
