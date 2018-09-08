import {Component} from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { User } from '../../entities/XBitApi/user';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  email: string;
  password: string;

  login(): void {
    if (this.validateEmail(this.email)) {
      this.authenticationService.login(new User(this.email, this.password))
        .subscribe(result => {
          if (result) {
            this.router.navigateByUrl('/pages/dashboard')
          } else {
            // error handling for failed login
          }
        })
    } else {
      // error handling for incorrect email structure
    }
  }

  private validateEmail(email: string): boolean {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }
}
