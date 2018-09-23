import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { CookieService } from '../cookie/cookie.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var xbitUrl = 'mockurl'; // set environment variables
    if (req.url.indexOf(xbitUrl) > -1) {
      var clonedRequest = req.clone({
        headers: req.headers.set('bearer', this.cookieService.getToken())
      });
      return next.handle(clonedRequest)
    }
    return next.handle(req);
  }

  constructor(
    private cookieService: CookieService
  ) { }

}
