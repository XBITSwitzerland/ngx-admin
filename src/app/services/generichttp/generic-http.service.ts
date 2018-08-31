import { Injectable } from '@angular/core';
// import { ErrorHandlerService } from '../errorhandler/error-handler.service';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { IData } from '../../Entities/Idata';

@Injectable()
export class GenericHttpService {

  private headers: Headers;

  get(url: string) {
    return this.http.get(url);
}
  
  // Get API Call
  // get(url): Observable<any> {
  //   return this.http.get(url)
  //     .catch(err => {
  //       this.errorHandlerService.handleError(err);
  //       return "";
  //     });
  // }

  constructor(private http: Http/*, private errorHandlerService: ErrorHandlerService*/ ) { 
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json; charset=UTF-8');
  }

}

