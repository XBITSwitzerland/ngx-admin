import {Component} from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { User } from '../../entities/XBitApi/user';
import { Router } from '@angular/router';
import * as sha256 from 'js-sha256';
import { ZipOperator } from 'rxjs/operator/zip';
import { Country } from '../../entities/XBitApi/country'
import { DataService } from '../../services/data/data.service';
import { DataType } from '../../entities/enums/data-type';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class Register {

  name: string;
  surname: string;
  phone: string;
  birthMonth: number;
  birthDay: number;
  birthYear: number;
  username: string;
  street: string;
  place: string;
  zip: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  countries: Country[];
  selectedCountry: Country;

  register(): void {
    var flags = [];
    var birthDate = this.birthYear + '-' + this.birthMonth + '-' + this.birthDay + ' 00:00:00.0000000';

    

    if (this.password !== this.passwordConfirmation)
      flags.push('Passwords are not identical!');

    if (this.birthDay > 31)
      flags.push('Birthday can not be higher than 31');

    if (this.birthMonth > 12)
      flags.push('Birthmonth can not be higher than 12');

    if (this.birthYear > (new Date()).getFullYear())
      flags.push('Your Birthday can not be in the future');

    if (flags.length > 0) {
      flags.forEach(flag => {
        this.toastrService.error(flag, 'Error Registering!');
      })
    } else {
      var hashedPassword = sha256.sha256.create().update(this.password).toString();
      var requestBody = {
        Password: hashedPassword,
        Name: this.name,
        Surname: this.surname,
        BirthDate: birthDate,
        Username: this.username,
        UserClaimsRoles: {
          Roles: []
        },
        Address: {
          Street: this.street,
          Place: this.place,
          Zip: this.zip,
          CountryName: this.selectedCountry.name
        }
      };
      this.authenticationService.register(requestBody).subscribe(res => {
        if (res === true) {
          this.router.navigateByUrl('/login');
        }
      })
    }
  }
  
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private dataService: DataService,
    private toastrService: ToastrService
  ) { 
    dataService.update(DataType.XBitApi, 'Country');
    dataService.countries.subscribe(countries => {
      this.countries = countries;
    });
  }
}
