import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { GenericHttpService } from '../generichttp/generic-http.service';
import { getTypeNameForDebugging } from '@angular/core/src/change_detection/differs/iterable_differs';

@Injectable()
export class DataService {

    baseUrl = "https://api.coingecko.com/api/v3"
    API_Key = "35e7e2e4-95f5-4633-912a-19229d3559c2"

    getPing(baseUrl: string): Observable<string> {
      var url = baseUrl + '/ping';
      return this.genericHttpService.get(url);
    }

  /*
  getRootDevices(baseUrl: string): Observable<Device[]> {
    var url = baseUrl + '/api/app/Devices?$filter=parentId%3Dnull';
    return this.genericHttpService.getMany<Device>(url, Device);
  }
  
  getDeviceByParentId(parentId: string, baseUrl: string): Observable<Device[]> {
    var url = baseUrl + '/api/pa/Devices?$filter=parentId="' + parentId + '"';
    return this.genericHttpService.getMany<Device>(url, Device);
  }

  getTenants(baseUrl: string): Observable<Tenant[]> {
    var url = baseUrl + '/api/app/Tenants';
    return this.genericHttpService.getMany<Tenant>(url, Tenant);
  }

  getTenant(id: string, baseUrl: string): Observable<Tenant> {
    var url = baseUrl + '/api/app/Tenants/' + id;
    return this.genericHttpService.getOne<Tenant>(url, Tenant);
  }

  getProtocolAdapters(baseUrl: string): Observable<ProtocolAdapter[]> {
    var url = baseUrl + '/api/pa/ProtocolAdapters';
    return this.genericHttpService.getMany<ProtocolAdapter>(url, ProtocolAdapter);
  }

  getProtocolAdapterById(id: string, baseUrl: string): Observable<ProtocolAdapter[]> {
    var url = baseUrl + '/api/pa/ProtocolAdapters?$filter=id="' + id + '"';
    return this.genericHttpService.getMany<ProtocolAdapter>(url, ProtocolAdapter);
  }

  getPointsByDeviceId(deviceId: string, baseUrl: string): Observable<Point[]> {
    var url = baseUrl + '/api/app/Points?$filter=deviceId="' + deviceId + '"';
    return this.genericHttpService.getMany<Point>(url, Point);
  }

  getPointsByParentId(parentId: string, baseUrl: string): Observable<Point[]> {
    var url = baseUrl + '/api/app/Points?$filter=parentId="' + parentId + '"';
    return this.genericHttpService.getMany<Point>(url, Point);
  }

  getAlarmsByPointId(pointId: string, baseUrl: string): Observable<Alarm[]> {
    var url = baseUrl + '/api/pa/Alarms?$filter=pointId="' + pointId + '"';
    return this.genericHttpService.getMany<Alarm>(url, Alarm);
  }

  getPointCommandsByPointId(pointId: string, baseUrl: string): Observable<PointCommand[]> {
    var url = baseUrl + '/api/app/PointCommands?$filter=pointId="' + pointId + '"';
    return this.genericHttpService.getMany<PointCommand>(url, PointCommand);
  }

  getHealthCheck(baseUrl: string): Observable<any> {
    var url = baseUrl + '/api/healthcheck';
    return this.genericHttpService.get(url);
  }

  getConfig(id: string): Observable<Config> {
    var url = '/configs/' + id;
    return this.genericHttpService.getOneOf<Config>(url, Config);
  }

  getConfigs(): Observable<Config[]> {
    var url = '/configs';
    return this.genericHttpService.getManyOf<Config>(url, Config);
  }

  testFunction(): string {
    return 'DataService';
  }
  */

  constructor(private genericHttpService: GenericHttpService) { }

}
