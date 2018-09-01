import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { GenericHttpService } from '../generichttp/generic-http.service';
import { getTypeNameForDebugging } from '@angular/core/src/change_detection/differs/iterable_differs';

import { Address } from '../../entities/XBitApi/address';
import { Administrator } from '../../entities/XBitApi/administrator';
import { Algorithm } from '../../entities/XBitApi/algorithm';
import { Balance } from '../../entities/XBitApi/balance';
import { XBitCoin } from '../../entities/XBitApi/coin';
import { Country } from '../../entities/XBitApi/country';
import { Customer } from '../../entities/XBitApi/customer';
import { Data } from '../../entities/XBitApi/data';
import { HostingPeriod } from '../../entities/XBitApi/hostingperiod';
import { Location } from '../../entities/XBitApi/location';
import { Manufacturer } from '../../entities/XBitApi/manufacturer';
import { Miner } from '../../entities/XBitApi/miner';
import { MinerType } from '../../entities/XBitApi/minertype';
import { MiningFarm } from '../../entities/XBitApi/miningfarm';
import { UserInformation } from '../../entities/XBitApi/userinformation';

@Injectable()

export class XBitApiService {

    /********* Address *********/
    

    /********* Administrator *********/

    /********* Algorithm *********/

    /********* Balance *********/

    /********* XBitCoin *********/

    /********* Country *********/

    /********* Customer *********/

    /********* Data *********/

    /********* HostingPeriod *********/

    /********* Location *********/

    /********* Manufacturer *********/

    /********* Miner *********/

    /********* MinerType *********/

    /********* MiningFarm *********/

    /********* UserInformation *********/

  constructor(private genericHttpService: GenericHttpService) { }

}
