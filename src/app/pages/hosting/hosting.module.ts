import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Hosting } from './hosting.component';
import { routing } from './hosting.routing';

import { HostingTable } from './hostingTable/hostingTable.component';
import { HostingTableService } from './hostingTable/hostingTable.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    Hosting,
    HostingTable
  ],
  providers: [
    HostingTableService
  ]
})
export class HostingModule {}