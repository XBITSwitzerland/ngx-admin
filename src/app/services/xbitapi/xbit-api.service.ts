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
import { Data } from '../../entities/XBitApi/data';
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
    // Get Address
    public getAddress(id: string) {
        var url = this.baseUrl + '/address/' + id + '/';
        return this.genericHttpService.getOne<Address>(url, Address);
    }
    // Post Address
    public postAddress(body: any) {
        var url = this.baseUrl + '/address/';
        return this.genericHttpService.post(url, body);
    }
    // Put Address
    public putAddress(body: any) {
        var url = this.baseUrl + '/address/';
        return this.genericHttpService.put(url, body);
    }
    // Delete Address
    public deleteAddress(id: string) {
        var url = this.baseUrl + '/address/' + id + '/';
        return this.genericHttpService.delete(url);
    }
    /********* Administrator *********/
    // Get Administrators
    public getAdministrators() {
        var url = this.baseUrl + '/administrator';
        return this.genericHttpService.getMany<Administrator>(url, Administrator);
    }
    // Get Administrator
    public getAdministrator(id: string) {
        var url = this.baseUrl + '/administrator/' + id + '/';
        return this.genericHttpService.getOne<Administrator>(url, Administrator);
    }
    // Post Administrator
    public PostAdministrator(body: any) {
        var url = this.baseUrl + '/administrator';
        return this.genericHttpService.post(url, body);
    }
    // Put Administrator
    public PutAdministrator(body: any) {
        var url = this.baseUrl + '/administrator';
        return this.genericHttpService.put(url, body);
    }
    // Delete Administrator
    public DeleteAdministrator(id: string) {
        var url = this.baseUrl + '/administrator/' + id + '/';
        return this.genericHttpService.delete(url);
    }
    /********* Algorithm *********/
    // Get Algorithms
    public getAlgorithms() {
        var url = this.baseUrl + '/algorithm';
        return this.genericHttpService.getMany<Algorithm>(url, Algorithm);
    }
    // Get Algorithm
    public getAlgorithm(id: string) {
        var url = this.baseUrl + '/algorithm/' + id + '/';
        return this.genericHttpService.getOne<Algorithm>(url, Algorithm);
    }
    // Post Algorithm
    public PostAlgorithm(body: any) {
        var url = this.baseUrl + '/algorithm';
        return this.genericHttpService.post(url, body);
    }
    // Put Algorithm
    public PutAlgorithm(body: any) {
        var url = this.baseUrl + '/algorithm';
        return this.genericHttpService.put(url, body);
    }
    // Delete Algorithm
    public DeleteAlgorithm(id: string) {
        var url = this.baseUrl + '/algorithm/' + id + '/';
        return this.genericHttpService.delete(url);
    }

    /********* Balance *********/
    // Get Balances
    public getBalances() {
        var url = this.baseUrl + '/balances';
        return this.genericHttpService.getMany<Balance>(url, Balance);
    }
    // Get Balance
    public getBalance(id: string) {
        var url = this.baseUrl + '/balances/' + id + '/';
        return this.genericHttpService.getOne<Balance>(url, Balance);
    }
    // Post Balance
    public PostBalance(body: any) {
        var url = this.baseUrl + '/balances';
        return this.genericHttpService.post(url, body);
    }
    // Put Balance
    public PutBalance(body: any) {
        var url = this.baseUrl + '/balances';
        return this.genericHttpService.put(url, body);
    }
    // Delete Balance
    public DeleteBalance(id: string) {
        var url = this.baseUrl + '/balance/' + id + '/';
        return this.genericHttpService.delete(url);
    }

    /********* XBitCoin *********/
    // Get XBitCoins
    public getXBitCoins() {
        var url = this.baseUrl + '/coin';
        return this.genericHttpService.getMany<XBitCoin>(url, XBitCoin);
    }
    // Get XBitCoin
    public getXBitCoin(id: string) {
        var url = this.baseUrl + '/coin/' + id + '/';
        return this.genericHttpService.getOne<XBitCoin>(url, XBitCoin);
    }
    // Post XBitCoin
    public PostXBitCoin(body: any) {
        var url = this.baseUrl + '/coin';
        return this.genericHttpService.post(url, body);
    }
    // Put XBitCoin
    public PutXBitCoin(body: any) {
        var url = this.baseUrl + '/coin';
        return this.genericHttpService.put(url, body);
    }
    // Delete XBitCoin
    public DeleteXBitCoin (id: string) {
        var url = this.baseUrl + '/coin/' + id + '/';
        return this.genericHttpService.delete(url);
    }

    /********* Country *********/
    // Get Countries
    public getCountries() {
        var url = this.baseUrl + '/country';
        return this.genericHttpService.getMany<Country>(url, Country);
    }
    // Get Country
    public getCountry(id: string) {
        var url = this.baseUrl + '/country/' + id + '/';
        return this.genericHttpService.getOne<Country>(url, Country);
    }
    // Post Country
    public PostCountry(body: any) {
        var url = this.baseUrl + '/country';
        return this.genericHttpService.post(url, body);
    }
    // Put Country
    public PutCountry(body: any) {
        var url = this.baseUrl + '/country';
        return this.genericHttpService.post(url, body);
    }
    // Delete Country
    public DeleteCountry(id: string) {
        var url = this.baseUrl + '/country/' + id + '/';
        return this.genericHttpService.delete(url);
    }

    /********* Customer *********/
    // Get Customers
    public getCustomers() {
        var url = this.baseUrl + '/customer/';
        return this.genericHttpService.getMany<Customer>(url, Customer);
    }
    // Get Customer
    public getCustomer(id: string) {
        var url = this.baseUrl + '/customer/' + id + '/';
        return this.genericHttpService.getOne<Customer>(url, Customer);
    }
    // Post Customer
    public PostCustomer(body: any) {
        var url = this.baseUrl + '/customer';
        return this.genericHttpService.post(url, body);
    }
    // Put Customer
    public PutCustomer(body: any) {
        var url = this.baseUrl + '/customer';
        return this.genericHttpService.put(url, body);
    }
    // Delete Customer
    public DeleteCustomer(id: string) {
        var url = this.baseUrl + '/customer/' + id + '/';
        return this.genericHttpService.delete(url);
    }
    /********* HostingPeriod *********/
    // Get HostingPeriods
    public getHostingPeriods() {
        var url = this.baseUrl + '/hostingperiod/';
        return this.genericHttpService.getOne<HostingPeriod>(url, HostingPeriod);
    }
    // Get HostingPeriod
    public getHostingPeriod(id: string) {
        var url = this.baseUrl + '/hostingperiod/' + id + '/';
        return this.genericHttpService.getOne<HostingPeriod>(url, HostingPeriod);
    }
    // Post HostingPeriod
    public PostHostingPeriod(body: any) {
        var url = this.baseUrl + '/hostingperiod';
        return this.genericHttpService.post(url, body);
    }
    // Put HostingPeriod
    public PutHostingPeriod(body: any) {
        var url = this.baseUrl + '/hostingperiod';
        return this.genericHttpService.put(url, body);
    }
    // Delete HostingPeriod
    public DeleteHostingPeriod(id: string) {
        var url = this.baseUrl + '/hostingperiod/' + id + '/';
        return this.genericHttpService.delete(url);
    }
    /********* Location *********/
    // Get Locations
    public getLocations() {
        var url = this.baseUrl + '/location';
        return this.genericHttpService.getMany<Location>(url, Location);
    }
    // Get Location
    public getLocation(id: string) {
        var url = this.baseUrl + '/location/' + id + '/';
        return this.genericHttpService.getOne<Location>(url, Location);
    }
    // Post Location
    public PostLocation(body: any) {
        var url = this.baseUrl + '/location';
        return this.genericHttpService.post(url, body);
    }
    // Put Location
    public PutLocation(body: any) {
        var url = this.baseUrl + '/location';
        return this.genericHttpService.put(url, body);
    }
    // Delete Location
    public DeleteLocation(id: string) {
        var url = this.baseUrl + '/location/' + id + '/';
        return this.genericHttpService.delete(url);
    }
    /********* Manufacturer *********/
    // Get Manufacturers
    public getManufacturers() {
        var url = this.baseUrl + '/manufacturer';
        return this.genericHttpService.getMany<Manufacturer>(url, Manufacturer);
    }
    // Get Manufacturer
    public getManufacturer(id: string) {
        var url = this.baseUrl + '/manufacturer/' + id + '/';
        return this.genericHttpService.getOne<Manufacturer>(url, Manufacturer);
    }
    // Post Manufacturer
    public PostManufacturer(body: any) {
        var url = this.baseUrl + '/manufacturer';
        return this.genericHttpService.post(url, body);
    }
    // Put Manufacturer
    public PutManufacturer(body: any) {
        var url = this.baseUrl + '/manufacturer';
        return this.genericHttpService.put(url, body);
    }
    // Delete Manufacturer
    public DeleteManufacturer(id: string) {
        var url = this.baseUrl + '/manufacturer/' + id + '/';
        return this.genericHttpService.delete(url);
    }
    /********* Miner *********/
    // Get Miners
    public getMiners() {
        var url = this.baseUrl + '/miner/';
        return this.genericHttpService.getMany<Miner>(url, Miner);
    }
    // Get Miner
    public getMiner(id: string) {
        var url = this.baseUrl + '/miner/' + id + '/';
        return this.genericHttpService.getOne<Miner>(url, Miner);
    }
    // Post Miner
    public PostMiner(body: any) {
        var url = this.baseUrl + '/miner';
        return this.genericHttpService.post(url, body);
    }
    // Put Miner
    public PutMiner(body: any) {
        var url = this.baseUrl + '/miner';
        return this.genericHttpService.put(url, body);
    }
    // Delete Miner
    public DeleteMiner(id: string) {
        var url = this.baseUrl + '/miner/' + id + '/';
        return this.genericHttpService.delete(url);
    }
    /********* MinerType *********/
    // Get MinerTypes
    public getMinerTypes() {
        var url = this.baseUrl + '/minertype';
        return this.genericHttpService.getMany<MinerType>(url, MinerType);
    }
    // Get MinerType
    public getMinerType(id: string) {
        var url = this.baseUrl + '/minertype/' + id + '/';
        return this.genericHttpService.getOne<MinerType>(url, MinerType);
    }
    // Post MinerType
    public PostMinerType(body: any) {
        var url = this.baseUrl + '/minertype';
        return this.genericHttpService.post(url, body);
    }
    // Put MinerType
    public PutMinerType(body: any) {
        var url = this.baseUrl + '/minertype';
        return this.genericHttpService.put(url, body);
    }
    // Delete MinerType
    public DeleteMinerType(id: string) {
        var url = this.baseUrl + '/minertype/' + id + '/';
        return this.genericHttpService.delete(url);
    }
    /********* MiningFarm *********/
    // Get MiningFarms
    public getMiningFarms(id: string) {
        var url = this.baseUrl + '/miningfarm';
        return this.genericHttpService.getMany<MiningFarm>(url, MiningFarm);
    }
    // Get MiningFarm
    public getMiningFarm(id: string) {
        var url = this.baseUrl + '/miningfarm/' + id + '/';
        return this.genericHttpService.getOne<MiningFarm>(url, MiningFarm);
    }
    // Post MiningFarm
    public PostMiningFarm(body: any) {
        var url = this.baseUrl + '/miningfarm';
        return this.genericHttpService.post(url, body);
    }
    // Put MiningFarm
    public PutMiningFarm(body: any) {
        var url = this.baseUrl + '/miningfarm';
        return this.genericHttpService.put(url, body);
    }
    // Delete MiningFarm
    public DeleteMiningFarm(id: string) {
        var url = this.baseUrl + '/miningfarm/' + id + '/';
        return this.genericHttpService.delete(url);
    }
    /********* UserInformation *********/
    // Get UserInformations
    public getUserInformations() {
        var url = this.baseUrl + '/userinformation/';
        return this.genericHttpService.getMany<UserInformation>(url, UserInformation);
    }
    // Get UserInformation
    public getUserInformation(id: string) {
        var url = this.baseUrl + '/userinformation/' + id + '/';
        return this.genericHttpService.getOne<UserInformation>(url, UserInformation);
    }
    // Post UserInformation
    public PostUserInformation(body: any) {
        var url = this.baseUrl + '/userinformation';
        return this.genericHttpService.post(url, body);
    }
    // Put UserInformation
    public PutUserInformation(body: any) {
        var url = this.baseUrl + '/userinformation';
        return this.genericHttpService.post(url, body);
    }
    // Delete UserInformation
    public DeleteUserInformation(id: string) {
        var url = this.baseUrl + '/userinformation/' + id + '/';
        return this.genericHttpService.delete(url);
    }

  constructor(private genericHttpService: GenericHttpService) { }

}
