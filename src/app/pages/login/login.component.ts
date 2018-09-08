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
    this.authenticationService.login(new User(this.email, this.password))
      .subscribe(result => {
        if (result) {
          this.router.navigateByUrl('/pages/dashboard')
        }
      })
  }

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }
}
