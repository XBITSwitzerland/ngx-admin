import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { GenericHttpService } from '../generichttp/generic-http.service';
import { getTypeNameForDebugging } from '@angular/core/src/change_detection/differs/iterable_differs';

import { Address } from '../../entities/XBitApi/address';
import { Administrator } from '../../entities/XBitApi/administrator';
import { Algorithm } from '../../entities/XBitApi/algorithm';
import { Balance } from '../../entities/XBitApi/balance';
import { XBitCoin } from '../../entities/XBitApi/coin';
import { Country } from '../../entities/XBitApi/country';
import { Customer } from '../../entities/XBitApi/customer';
import { HostingPeriod } from '../../entities/XBitApi/hostingperiod';
import { Location } from '../../entities/XBitApi/location';
import { Manufacturer } from '../../entities/XBitApi/manufacturer';
import { Miner } from '../../entities/XBitApi/miner';
import { MinerType } from '../../entities/XBitApi/minertype';
import { MiningFarm } from '../../entities/XBitApi/miningfarm';
import { UserInformation } from '../../entities/XBitApi/userinformation';

@Injectable()

export class XBitApiService {

    baseUrl = "localhost:9999/api"

    /********* Address *********/
    getAddress(id: string, scope?: any): Observable<Address> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/address/' + id + '/';
        return vm.genericHttpService.getOne<Address>(url, Address);
    }

    postAddress(body: Address, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/address/';
        vm.genericHttpService.post<Address>(url, body);
    }

    putAddress(body: Address, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/address/';
        vm.genericHttpService.put<Address>(url, body);
    }

    deleteAddress(id: string, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/address/' + id + '/';
        vm.genericHttpService.delete(url);
    }

    /********* Administrator *********/
    getAdministrators(scope?: any): Observable<Administrator[]> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/administrator';
        return vm.genericHttpService.getMany<Administrator>(url, Administrator);
    }

    getAdministrator(id: string, scope?: any): Observable<Administrator> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/administrator/' + id + '/';
        return vm.genericHttpService.getOne<Administrator>(url, Administrator);
    }

    postAdministrator(body: Administrator, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/administrator';
        vm.genericHttpService.post<Administrator>(url, body);
    }

    putAdministrator(body: Administrator, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/administrator';
        vm.genericHttpService.put<Administrator>(url, body);
    }

    deleteAdministrator(id: string, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/administrator/' + id + '/';
        vm.genericHttpService.delete(url);
    }
    /********* Algorithm *********/
    getAlgorithms(scope?: any): Observable<Algorithm[]> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/algorithm';
        return vm.genericHttpService.getMany<Algorithm>(url, Algorithm);
    }

    getAlgorithm(id: string, scope?: any): Observable<Algorithm> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/algorithm/' + id + '/';
        return vm.genericHttpService.getOne<Algorithm>(url, Algorithm);
    }

    postAlgorithm(body: Algorithm, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/algorithm';
        vm.genericHttpService.post<Algorithm>(url, body);
    }

    putAlgorithm(body: Algorithm, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/algorithm';
        vm.genericHttpService.put<Algorithm>(url, body);
    }
    
    deleteAlgorithm(id: string, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/algorithm/' + id + '/';
        vm.genericHttpService.delete(url);
    }

    /********* Balance *********/
    getBalances(scope?: any): Observable<Balance[]> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/balances';
        return vm.genericHttpService.getMany<Balance>(url, Balance);
    }

    getBalance(id: string, scope?: any): Observable<Balance> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/balances/' + id + '/';
        return vm.genericHttpService.getOne<Balance>(url, Balance);
    }

    postBalance(body: Balance, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/balances';
        return vm.genericHttpService.post<Balance>(url, body);
    }

    putBalance(body: Balance, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/balances';
        vm.genericHttpService.put<Balance>(url, body);
    }

    dWeleteBalance(id: string, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/balance/' + id + '/';
        vm.genericHttpService.delete(url);
    }

    /********* XBitCoin *********/
    getXBitCoins(scope?: any): Observable<XBitCoin[]> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/coin';
        return vm.genericHttpService.getMany<XBitCoin>(url, XBitCoin);
    }

    getXBitCoin(id: string, scope?: any): Observable<XBitCoin> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/coin/' + id + '/';
        return vm.genericHttpService.getOne<XBitCoin>(url, XBitCoin);
    }

    postXBitCoin(body: XBitCoin, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/coin';
        vm.genericHttpService.post<XBitCoin>(url, body);
    }

    putXBitCoin(body: XBitCoin, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/coin';
        return vm.genericHttpService.put<XBitCoin>(url, body);
    }

    deleteXBitCoin (id: string, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/coin/' + id + '/';
        vm.genericHttpService.delete(url);
    }

    /********* Country *********/
    getCountries(scope?: any): Observable<Country[]> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/country';
        return vm.genericHttpService.getMany<Country>(url, Country);
    }

    getCountry(id: string, scope?: any): Observable<Country> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/country/' + id + '/';
        return vm.genericHttpService.getOne<Country>(url, Country);
    }

    postCountry(body: Country, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/country';
        vm.genericHttpService.post<Country>(url, body);
    }

    putCountry(body: Country, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/country';
        vm.genericHttpService.post<Country>(url, body);
    }

    deleteCountry(id: string, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/country/' + id + '/';
        vm.genericHttpService.delete(url);
    }

    /********* Customer *********/
    getCustomers(scope?: any): Observable<Customer[]> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/customer/';
        return vm.genericHttpService.getMany<Customer>(url, Customer);
    }

    getCustomer(id: string, scope?: any): Observable<Customer> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/customer/' + id + '/';
        return vm.genericHttpService.getOne<Customer>(url, Customer);
    }

    postCustomer(body: Customer, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/customer';
        vm.genericHttpService.post<Customer>(url, body);
    }

    putCustomer(body: Country, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/customer';
        vm.genericHttpService.put<Country>(url, body);
    }

    deleteCustomer(id: string, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/customer/' + id + '/';
        vm.genericHttpService.delete(url);
    }
    /********* HostingPeriod *********/
    getHostingPeriods(scope?: any): Observable<HostingPeriod[]> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/hostingperiod/';
        return vm.genericHttpService.getMany<HostingPeriod>(url, HostingPeriod);
    }

    getHostingPeriod(id: string, scope?: any): Observable<HostingPeriod> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/hostingperiod/' + id + '/';
        return vm.genericHttpService.getOne<HostingPeriod>(url, HostingPeriod);
    }

    postHostingPeriod(body: HostingPeriod, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/hostingperiod';
        vm.genericHttpService.post<HostingPeriod>(url, body);
    }

    putHostingPeriod(body: HostingPeriod, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/hostingperiod';
        vm.genericHttpService.put<HostingPeriod>(url, body);
    }

    deleteHostingPeriod(id: string, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/hostingperiod/' + id + '/';
        vm.genericHttpService.delete(url);
    }
    /********* Location *********/
    getLocations(scope?: any): Observable<Location[]> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/location';
        return vm.genericHttpService.getMany<Location>(url, Location);
    }

    getLocation(id: string, scope?: any): Observable<Location> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/location/' + id + '/';
        return vm.genericHttpService.getOne<Location>(url, Location);
    }

    postLocation(body: Location, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/location';
        vm.genericHttpService.post<Location>(url, body);
    }

    putLocation(body: Location, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/location';
        vm.genericHttpService.put<Location>(url, body);
    }

    deleteLocation(id: string, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/location/' + id + '/';
        vm.genericHttpService.delete(url);
    }
    /********* Manufacturer *********/
    getManufacturers(scope?: any): Observable<Manufacturer[]> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/manufacturer';
        return vm.genericHttpService.getMany<Manufacturer>(url, Manufacturer);
    }

    getManufacturer(id: string, scope?: any): Observable<Manufacturer> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/manufacturer/' + id + '/';
        return vm.genericHttpService.getOne<Manufacturer>(url, Manufacturer);
    }

    postManufacturer(body: Manufacturer, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/manufacturer';
        vm.genericHttpService.post<Manufacturer>(url, body);
    }

    putManufacturer(body: Manufacturer, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/manufacturer';
        vm.genericHttpService.put<Manufacturer>(url, body);
    }

    deleteManufacturer(id: string, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/manufacturer/' + id + '/';
        vm.genericHttpService.delete(url);
    }
    /********* Miner *********/
    getMiners(scope?: any): Observable<Miner[]> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/miner/';
        return vm.genericHttpService.getMany<Miner>(url, Miner);
    }

    getMiner(id: string, scope?: any): Observable<Miner> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/miner/' + id + '/';
        return vm.genericHttpService.getOne<Miner>(url, Miner);
    }

    postMiner(body: Miner, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/miner';
        vm.genericHttpService.post<Miner>(url, body);
    }

    putMiner(body: Miner, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/miner';
        vm.genericHttpService.put<Miner>(url, body);
    }

    deleteMiner(id: string, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/miner/' + id + '/';
        vm.genericHttpService.delete(url);
    }
    /********* MinerType *********/
    getMinerTypes(scope?: any): Observable<MinerType[]> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/minertype';
        return vm.genericHttpService.getMany<MinerType>(url, MinerType);
    }

    getMinerType(id: string, scope?: any): Observable<MinerType> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/minertype/' + id + '/';
        return vm.genericHttpService.getOne<MinerType>(url, MinerType);
    }

    postMinerType(body: MinerType, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/minertype';
        vm.genericHttpService.post<MinerType>(url, body);
    }

    putMinerType(body: MinerType, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/minertype';
        vm.genericHttpService.put<MinerType>(url, body);
    }

    deleteMinerType(id: string, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/minertype/' + id + '/';
        vm.genericHttpService.delete(url);
    }
    /********* MiningFarm *********/
    getMiningFarms(id: string, scope?: any): Observable<MiningFarm[]> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/miningfarm';
        return vm.genericHttpService.getMany<MiningFarm>(url, MiningFarm);
    }

    getMiningFarm(id: string, scope?: any): Observable<MiningFarm> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/miningfarm/' + id + '/';
        return vm.genericHttpService.getOne<MiningFarm>(url, MiningFarm);
    }

    postMiningFarm(body: MiningFarm, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/miningfarm';
        vm.genericHttpService.post<MiningFarm>(url, body);
    }

    putMiningFarm(body: MiningFarm, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/miningfarm';
        vm.genericHttpService.put<MiningFarm>(url, body);
    }

    deleteMiningFarm(id: string, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/miningfarm/' + id + '/';
        vm.genericHttpService.delete(url);
    }
    /********* UserInformation *********/
    getUserInformations(scope?: any): Observable<UserInformation[]> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/userinformation/';
        return vm.genericHttpService.getMany<UserInformation>(url, UserInformation);
    }

    getUserInformation(id: string, scope?: any): Observable<UserInformation> {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/userinformation/' + id + '/';
        return vm.genericHttpService.getOne<UserInformation>(url, UserInformation);
    }

    postUserInformation(body: UserInformation, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/userinformation';
        vm.genericHttpService.post<UserInformation>(url, body);
    }

    
    putUserInformation(body: UserInformation, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/userinformation';
        vm.genericHttpService.post<UserInformation>(url, body);
    }

    deleteUserInformation(id: string, scope?: any): void {
        var vm = this;
        if (scope) {
            vm = scope;
        }
        var url = vm.baseUrl + '/userinformation/' + id + '/';
        vm.genericHttpService.delete(url);
    }

  constructor(private genericHttpService: GenericHttpService) { }

}
