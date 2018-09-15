import {Component} from '@angular/core';
import { Customer } from '../../entities/XBitApi/customer';
import { Miner } from '../../entities/XBitApi/miner';
import { UserInformation } from '../../entities/XBitApi/userinformation';
import { DataService } from '../../services/data/data.service';
import { XBitApiService } from '../../services/xbitapi/xbit-api.service'
import { Address } from '../../entities/XBitApi/address';
import { Country } from '../../entities/XBitApi/country';
import { DataType } from '../../entities/enums/data-type';

@Component({
  selector: 'profile',
  styleUrls: ['./profile.scss'],
  templateUrl: './profile.html'
})
export class Profile {
  user: Customer[] = [];
  userinformation: UserInformation[] = [];
  address: Address[] = [];
  countries: Country[] = [];

  constructor(dataService: DataService, xbitApiService: XBitApiService) {
    dataService.update(DataType.XBitApi, "Customer");
    dataService.update(DataType.XBitApi, "Address");
    dataService.update(DataType.XBitApi, "Country");
    dataService.update(DataType.XBitApi, "UserInfromation");

    dataService.customers.subscribe( res => {
        this.user = res;
        
        dataService.userInformations.subscribe( res => {
          this.userinformation = res;
        });
        dataService.adresses.subscribe( res => {
          this.address = res;
        });
        dataService.countries.subscribe( res => {
          this.countries = res;
        });
    });
  }
}
