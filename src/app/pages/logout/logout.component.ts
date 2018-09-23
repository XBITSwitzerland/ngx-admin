import {Component} from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'logout',
  templateUrl: './logout.html',
  styleUrls: ['./logout.scss']
})
export class Logout {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    if (authenticationService.loggedIn) {
      authenticationService.logout().subscribe(result => {
        if (result === true)
          router.navigateByUrl('/login');
      })
    } else {
      router.navigateByUrl('/pages/dashboard');
    }
  }
}
