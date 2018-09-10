import {Component} from '@angular/core';
import { Customer } from '../../entities/XBitApi/customer';
import { Miner } from '../../entities/XBitApi/miner';
import { UserInformation } from '../../entities/XBitApi/userinformation';
import { DataService } from '../../services/data/data.service';
import { XBitApiService } from '../../services/xbitapi/xbit-api.service'
import { Address } from '../../entities/XBitApi/address';
import { Country } from '../../entities/XBitApi/country';

@Component({
  selector: 'profile',
  styleUrls: ['./profile.scss'],
  templateUrl: './profile.html'
})
export class Profile {
  user: Customer;
  userinformation: UserInformation;
  address: Address;
  countries: Country[];

  constructor(dataService: DataService, xbitApiService: XBitApiService) {
    // Get Customers
    dataService.customers.subscribe( res => {
      if(res.length > 0) { // If Customer is 1
        this.user = res[0];
        // Get UserInformationId
        xbitApiService.getUserInformation(res[0].userInformationid).subscribe( res => {
          this.userinformation = res;
        });
        // Get Address
        xbitApiService.getAddress(res[0].addressId).subscribe( res => {
          this.address = res;
        });

        dataService.xbitApiService.getCountries().subscribe( res => {
          this.countries = res;
        });
      } else {

      }
    });
  }
}
