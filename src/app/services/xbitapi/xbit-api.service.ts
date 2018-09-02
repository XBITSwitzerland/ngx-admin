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
    getAddress(id: string): Observable<Address> {
        var url = this.baseUrl + '/address/' + id + '/';
        return this.genericHttpService.getOne<Address>(url, Address);
    }

    postAddress(body: Address): void {
        var url = this.baseUrl + '/address/';
        this.genericHttpService.post<Address>(url, body);
    }

    putAddress(body: Address): void {
        var url = this.baseUrl + '/address/';
        this.genericHttpService.put<Address>(url, body);
    }

    deleteAddress(id: string): void {
        var url = this.baseUrl + '/address/' + id + '/';
        this.genericHttpService.delete(url);
    }

    /********* Administrator *********/
    getAdministrators(): Observable<Administrator[]> {
        var url = this.baseUrl + '/administrator';
        return this.genericHttpService.getMany<Administrator>(url, Administrator);
    }

    getAdministrator(id: string): Observable<Administrator> {
        var url = this.baseUrl + '/administrator/' + id + '/';
        return this.genericHttpService.getOne<Administrator>(url, Administrator);
    }

    postAdministrator(body: Administrator): void {
        var url = this.baseUrl + '/administrator';
        this.genericHttpService.post<Administrator>(url, body);
    }

    putAdministrator(body: Administrator): void {
        var url = this.baseUrl + '/administrator';
        this.genericHttpService.put<Administrator>(url, body);
    }

    deleteAdministrator(id: string): void {
        var url = this.baseUrl + '/administrator/' + id + '/';
        this.genericHttpService.delete(url);
    }
    /********* Algorithm *********/
    getAlgorithms(): Observable<Algorithm[]> {
        var url = this.baseUrl + '/algorithm';
        return this.genericHttpService.getMany<Algorithm>(url, Algorithm);
    }

    getAlgorithm(id: string): Observable<Algorithm> {
        var url = this.baseUrl + '/algorithm/' + id + '/';
        return this.genericHttpService.getOne<Algorithm>(url, Algorithm);
    }

    postAlgorithm(body: Algorithm): void {
        var url = this.baseUrl + '/algorithm';
        this.genericHttpService.post<Algorithm>(url, body);
    }

    putAlgorithm(body: Algorithm): void {
        var url = this.baseUrl + '/algorithm';
        this.genericHttpService.put<Algorithm>(url, body);
    }
W
    deleteAlgorithm(id: string): void {
        var url = this.baseUrl + '/algorithm/' + id + '/';
        this.genericHttpService.delete(url);
    }

    /********* Balance *********/
    getBalances(): Observable<Balance[]> {
        var url = this.baseUrl + '/balances';
        return this.genericHttpService.getMany<Balance>(url, Balance);
    }

    getBalance(id: string): Observable<Balance> {
        var url = this.baseUrl + '/balances/' + id + '/';
        return this.genericHttpService.getOne<Balance>(url, Balance);
    }

    postBalance(body: Balance): void {
        var url = this.baseUrl + '/balances';
        return this.genericHttpService.post<Balance>(url, body);
    }

    putBalance(body: Balance): void {
        var url = this.baseUrl + '/balances';
        this.genericHttpService.put<Balance>(url, body);
    }

    dWeleteBalance(id: string): void {
        var url = this.baseUrl + '/balance/' + id + '/';
        this.genericHttpService.delete(url);
    }

    /********* XBitCoin *********/
    getXBitCoins(): Observable<XBitCoin[]> {
        var url = this.baseUrl + '/coin';
        return this.genericHttpService.getMany<XBitCoin>(url, XBitCoin);
    }

    getXBitCoin(id: string): Observable<XBitCoin> {
        var url = this.baseUrl + '/coin/' + id + '/';
        return this.genericHttpService.getOne<XBitCoin>(url, XBitCoin);
    }

    postXBitCoin(body: XBitCoin): void {
        var url = this.baseUrl + '/coin';
        this.genericHttpService.post<XBitCoin>(url, body);
    }

    putXBitCoin(body: XBitCoin): void {
        var url = this.baseUrl + '/coin';
        return this.genericHttpService.put<XBitCoin>(url, body);
    }

    deleteXBitCoin (id: string): void {
        var url = this.baseUrl + '/coin/' + id + '/';
        this.genericHttpService.delete(url);
    }

    /********* Country *********/
    getCountries(): Observable<Country[]> {
        var url = this.baseUrl + '/country';
        return this.genericHttpService.getMany<Country>(url, Country);
    }

    getCountry(id: string): Observable<Country> {
        var url = this.baseUrl + '/country/' + id + '/';
        return this.genericHttpService.getOne<Country>(url, Country);
    }

    postCountry(body: Country): void {
        var url = this.baseUrl + '/country';
        this.genericHttpService.post<Country>(url, body);
    }

    putCountry(body: Country): void {
        var url = this.baseUrl + '/country';
        this.genericHttpService.post<Country>(url, body);
    }

    deleteCountry(id: string): void {
        var url = this.baseUrl + '/country/' + id + '/';
        this.genericHttpService.delete(url);
    }

    /********* Customer *********/
    getCustomers(): Observable<Customer[]> {
        var url = this.baseUrl + '/customer/';
        return this.genericHttpService.getMany<Customer>(url, Customer);
    }

    getCustomer(id: string): Observable<Customer> {
        var url = this.baseUrl + '/customer/' + id + '/';
        return this.genericHttpService.getOne<Customer>(url, Customer);
    }

    postCustomer(body: Customer): void {
        var url = this.baseUrl + '/customer';
        this.genericHttpService.post<Customer>(url, body);
    }

    putCustomer(body: Country): void {
        var url = this.baseUrl + '/customer';
        this.genericHttpService.put<Country>(url, body);
    }

    deleteCustomer(id: string): void {
        var url = this.baseUrl + '/customer/' + id + '/';
        this.genericHttpService.delete(url);
    }
    /********* HostingPeriod *********/
    getHostingPeriods(): Observable<HostingPeriod[]> {
        var url = this.baseUrl + '/hostingperiod/';
        return this.genericHttpService.getMany<HostingPeriod>(url, HostingPeriod);
    }

    getHostingPeriod(id: string): Observable<HostingPeriod> {
        var url = this.baseUrl + '/hostingperiod/' + id + '/';
        return this.genericHttpService.getOne<HostingPeriod>(url, HostingPeriod);
    }

    postHostingPeriod(body: HostingPeriod): void {
        var url = this.baseUrl + '/hostingperiod';
        this.genericHttpService.post<HostingPeriod>(url, body);
    }

    putHostingPeriod(body: HostingPeriod): void {
        var url = this.baseUrl + '/hostingperiod';
        this.genericHttpService.put<HostingPeriod>(url, body);
    }

    deleteHostingPeriod(id: string): void {
        var url = this.baseUrl + '/hostingperiod/' + id + '/';
        this.genericHttpService.delete(url);
    }
    /********* Location *********/
    getLocations(): Observable<Location[]> {
        var url = this.baseUrl + '/location';
        return this.genericHttpService.getMany<Location>(url, Location);
    }

    getLocation(id: string): Observable<Location> {
        var url = this.baseUrl + '/location/' + id + '/';
        return this.genericHttpService.getOne<Location>(url, Location);
    }

    postLocation(body: Location): void {
        var url = this.baseUrl + '/location';
        this.genericHttpService.post<Location>(url, body);
    }

    putLocation(body: Location): void {
        var url = this.baseUrl + '/location';
        this.genericHttpService.put<Location>(url, body);
    }

    deleteLocation(id: string): void {
        var url = this.baseUrl + '/location/' + id + '/';
        this.genericHttpService.delete(url);
    }
    /********* Manufacturer *********/
    getManufacturers(): Observable<Manufacturer[]> {
        var url = this.baseUrl + '/manufacturer';
        return this.genericHttpService.getMany<Manufacturer>(url, Manufacturer);
    }

    getManufacturer(id: string): Observable<Manufacturer> {
        var url = this.baseUrl + '/manufacturer/' + id + '/';
        return this.genericHttpService.getOne<Manufacturer>(url, Manufacturer);
    }

    postManufacturer(body: Manufacturer): void {
        var url = this.baseUrl + '/manufacturer';
        this.genericHttpService.post<Manufacturer>(url, body);
    }

    putManufacturer(body: Manufacturer): void {
        var url = this.baseUrl + '/manufacturer';
        this.genericHttpService.put<Manufacturer>(url, body);
    }

    deleteManufacturer(id: string): void {
        var url = this.baseUrl + '/manufacturer/' + id + '/';
        this.genericHttpService.delete(url);
    }
    /********* Miner *********/
    getMiners(): Observable<Miner[]> {
        var url = this.baseUrl + '/miner/';
        return this.genericHttpService.getMany<Miner>(url, Miner);
    }

    getMiner(id: string): Observable<Miner> {
        var url = this.baseUrl + '/miner/' + id + '/';
        return this.genericHttpService.getOne<Miner>(url, Miner);
    }

    postMiner(body: Miner): void {
        var url = this.baseUrl + '/miner';
        this.genericHttpService.post<Miner>(url, body);
    }

    putMiner(body: Miner): void {
        var url = this.baseUrl + '/miner';
        this.genericHttpService.put<Miner>(url, body);
    }

    deleteMiner(id: string): void {
        var url = this.baseUrl + '/miner/' + id + '/';
        this.genericHttpService.delete(url);
    }
    /********* MinerType *********/
    getMinerTypes(): Observable<MinerType[]> {
        var url = this.baseUrl + '/minertype';
        return this.genericHttpService.getMany<MinerType>(url, MinerType);
    }

    getMinerType(id: string): Observable<MinerType> {
        var url = this.baseUrl + '/minertype/' + id + '/';
        return this.genericHttpService.getOne<MinerType>(url, MinerType);
    }

    postMinerType(body: MinerType): void {
        var url = this.baseUrl + '/minertype';
        this.genericHttpService.post<MinerType>(url, body);
    }

    putMinerType(body: MinerType): void {
        var url = this.baseUrl + '/minertype';
        this.genericHttpService.put<MinerType>(url, body);
    }

    deleteMinerType(id: string): void {
        var url = this.baseUrl + '/minertype/' + id + '/';
        this.genericHttpService.delete(url);
    }
    /********* MiningFarm *********/
    getMiningFarms(id: string): Observable<MiningFarm[]> {
        var url = this.baseUrl + '/miningfarm';
        return this.genericHttpService.getMany<MiningFarm>(url, MiningFarm);
    }

    getMiningFarm(id: string): Observable<MiningFarm> {
        var url = this.baseUrl + '/miningfarm/' + id + '/';
        return this.genericHttpService.getOne<MiningFarm>(url, MiningFarm);
    }

    postMiningFarm(body: MiningFarm): void {
        var url = this.baseUrl + '/miningfarm';
        this.genericHttpService.post<MiningFarm>(url, body);
    }

    putMiningFarm(body: MiningFarm): void {
        var url = this.baseUrl + '/miningfarm';
        this.genericHttpService.put<MiningFarm>(url, body);
    }

    deleteMiningFarm(id: string): void {
        var url = this.baseUrl + '/miningfarm/' + id + '/';
        this.genericHttpService.delete(url);
    }
    /********* UserInformation *********/
    getUserInformations(): Observable<UserInformation[]> {
        var url = this.baseUrl + '/userinformation/';
        return this.genericHttpService.getMany<UserInformation>(url, UserInformation);
    }

    getUserInformation(id: string): Observable<UserInformation> {
        var url = this.baseUrl + '/userinformation/' + id + '/';
        return this.genericHttpService.getOne<UserInformation>(url, UserInformation);
    }

    postUserInformation(body: UserInformation): void {
        var url = this.baseUrl + '/userinformation';
        this.genericHttpService.post<UserInformation>(url, body);
    }

    
    putUserInformation(body: UserInformation): void {
        var url = this.baseUrl + '/userinformation';
        this.genericHttpService.post<UserInformation>(url, body);
    }

    deleteUserInformation(id: string): void {
        var url = this.baseUrl + '/userinformation/' + id + '/';
        this.genericHttpService.delete(url);
    }

  constructor(private genericHttpService: GenericHttpService) { }

}
