import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProxyInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
    var baseUrl = this.getBaseUrl(req.url);
    var newUrl = this.getNewUrl(req.url);
    var clonedRequest = req.clone({
        headers: req.headers.append('X-Proxy-Base-Url', baseUrl),
        url: newUrl
    });
    return next.handle(clonedRequest);
  }

  getBaseUrl(url: string): string {
    var splittedUrl = url.split('/');
    var baseUrl = splittedUrl[0] + '//' + splittedUrl[2]; // e.g. http://google.com
    return baseUrl;
  }

  getNewUrl(url: string): string {
    var newUrl = '/api';
    var splittedUrl = url.split('/');
    for (var i = 3; i < splittedUrl.length; i++) {
      newUrl += '/' + splittedUrl[i];
    }
    return newUrl;
  }

  constructor() { }

}
