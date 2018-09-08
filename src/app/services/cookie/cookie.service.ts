import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {

  setToken(token: string): void {
    var tokenToSave = {
      "token": token
    };
    document.cookie = JSON.stringify(tokenToSave);
  }

  getToken(): any {
    var tokenString = document.cookie;
    if (tokenString) {
      return JSON.parse(tokenString).token;
    }
    return;
  }

  constructor() {}
}
