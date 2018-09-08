import { Injectable } from '@angular/core';
import { CookieService } from '../cookie/cookie.service';
import { GenericHttpService } from '../generichttp/generic-http.service';
import { Observable } from 'rxjs/Observable';
import jwtDecode = require('jwt-decode');

import { User } from '../../entities/XBitApi/user';

@Injectable()
export class AuthenticationService {

  private baseUrl = 'mockUrl'; // need to set as environment variable to remove redundancy
  loggedIn: boolean = false;

  login(user: User): Observable<boolean> {
    return new Observable(observer => {
      if (!this.loggedIn) {
        var url = this.baseUrl + '/Login/Create';
        this.genericHttpService.postWithResponse<User>(url, user)
          .subscribe(
            token => {
              this.cookieService.setToken(token);
              this.loggedIn = true;
              observer.next(true)
            },
            error => {
              observer.next(false);
            }
          );
      }
    });
  }

  logout(): Observable<boolean> {
    return new Observable(observer => {
      if (this.loggedIn) {
        var url = this.baseUrl + '/Login/Logout';
        this.genericHttpService.postWithResponse(url, this.cookieService.getToken())
          .subscribe(
            success => {
              observer.next(true);
            },
            error => {
              observer.next(false);
            }
          )
      }
      observer.next(false);
    });
  }

  isAuthenticated(): boolean {
    var tokenRaw = this.cookieService.getToken();
    if (tokenRaw) {
      var token = jwtDecode(tokenRaw);
      var currentTime = new Date().getTime() / 1000;
      return !(currentTime > token.exp);
    }
    return false;
  }

  constructor(
    private cookieService: CookieService,
    private genericHttpService: GenericHttpService
  ) { }

}
