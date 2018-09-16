import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { IData } from '../../entities/Idata';
import { ErrorHandlerService } from '../errorhandler/error-handler.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GenericHttpService {

  getOne<T>(url: string, type: new(object: IData) => T): Observable<T> {
    return this.http.get<IData>(url)
      .map(response => {
        return new type(response);
      })
      .catch(error => {
        this.errorHandlerService.handleError(error);
        return Observable.empty<T>();
      });
  }

  getMany<T>(url: string, type: new (object: IData) => T): Observable<T[]> {
    return this.http.get<IData[]>(url)
      .map(responseArray => {
        var retval = [];
        responseArray.forEach(response => {
          retval.push(new type(response));
        });
        return retval;
      })
      .catch(error => {
        this.errorHandlerService.handleError(error);
        return Observable.empty<T[]>();
      })
  }

  get(url: string): Observable<any> {
    return this.http.get(url)
      .catch(error => {
        this.errorHandlerService.handleError(error);
        return Observable.empty<any>();
      });
  }

  post<T>(url: string, body: T): void {
    this.http.post(url, body)
      .catch(error => {
        this.errorHandlerService.handleError(error);
        return Observable.empty();
      });
  }

  put<T>(url: string, body: T): void {
    this.http.put(url, body)
      .catch(error => {
        this.errorHandlerService.handleError(error);
        return Observable.empty();
      });
  }

  delete(url: string): void{
    this.http.delete(url)
      .catch(error => {
        this.errorHandlerService.handleError(error);
        return Observable.empty();
      });
  }
  

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) { }

}

