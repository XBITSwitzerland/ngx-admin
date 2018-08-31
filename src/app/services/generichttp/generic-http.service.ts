import { Injectable } from '@angular/core';
import { ErrorHandlerService } from '../errorhandler/error-handler.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/map';
import { IData } from '../../Entities/Idata';

@Injectable()
export class GenericHttpService {

  // Get API Call
  get(url): Observable<any> {
    return this.http.get(url)
      .catch(err => {
        this.errorHandlerService.handleError(err);
        return Observable.empty();
      });
  }

  // TODO: Kevin, what are thoseee
  getMany<T>(url: string, type: new (object: IData) => T): Observable<T[]> {
    return this.http.get<IData[]>(url)
      .map(responseArray => {
        var retval = [];
        responseArray.forEach(response => {
          retval.push(new type(response));
        });
        return retval;
      })
      .catch(err => {
        this.errorHandlerService.handleError(err);
        return Observable.empty<T[]>();
      });
  }

  getOne<T>(url: string, type: new (object: IData) => T): Observable<T> {
    return this.http.get<IData>(url)
      .map(response => {
        return new type(response);
      })
      .catch(err => {
        this.errorHandlerService.handleError(err);
        return Observable.empty<T>();
      });
  }

  

  getOneOf<T>(url: string, type: new (object: {}) => T): Observable<T> {
    return this.http.get<T>(url)
      .map(response => {
        return new type(response);
      })
      .catch(err => {
        this.errorHandlerService.handleError(err);
        return Observable.empty<T>();
      });
  }

  getManyOf<T>(url: string, type: new (object: {}) => T): Observable<T[]> {
    return this.http.get<T[]>(url)
      .map(responseArray => {
        var retval = [];
        responseArray.forEach(response => {
          retval.push(new type(response));
        });
        return retval;
      })
      .catch(err => {
        this.errorHandlerService.handleError(err);
        return Observable.empty<T[]>();
      });
  }

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService ) { }

}

