import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { GenericHttpService } from '../generichttp/generic-http.service';
import { getTypeNameForDebugging } from '@angular/core/src/change_detection/differs/iterable_differs';

@Injectable()
export class CoingeckoService {

    baseUrl = "https://api.coinmarketcap.com/v2/"
    API_Key = "35e7e2e4-95f5-4633-912a-19229d3559c2"

    getPing(): Observable<string> {
      var url = this.baseUrl + '/ticker/1/';
      return this.genericHttpService.get(url);
    }

  constructor(private genericHttpService: GenericHttpService) { }

}
