import {Component} from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { User } from '../../entities/XBitApi/user';
import { Router } from '@angular/router';
import * as sha256 from 'js-sha256';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  email: string;
  password: string;

  login(): void {
    var hashedPassword = sha256.sha256.create().update(this.password).toString();
    console.log('hashedPassword=', hashedPassword);
    this.authenticationService.login(new User(this.email, hashedPassword))
      .subscribe(result => {
        if (result === true) {
          this.router.navigateByUrl('/pages/dashboard')
        }
      })
  }

  goToRegister(): void {
    this.router.navigateByUrl('/register')
  }

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }
}
