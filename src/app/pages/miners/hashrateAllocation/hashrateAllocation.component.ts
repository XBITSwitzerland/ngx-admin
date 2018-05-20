import {Component} from '@angular/core';

import {HashrateAllocationService} from './hashrateAllocation.service';

@Component({
  selector: 'hashrate-allocation',
  templateUrl: './hashrateAllocation.html',
  styleUrls: ['./hashrateAllocation.scss']
})
export class HashrateAllocation {
  selectedAlgorithm = "SHA-256";

  allocationTableData:Array<any>;

  constructor(private _hashrateTableService: HashrateAllocationService) {
    this.allocationTableData = _hashrateTableService.allocationTableData;
  };
}