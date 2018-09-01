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

    // Put Address

    // Delete Address

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
    public PostAdministrator() {

    }
    // Put Administrator
    public PutAdministrator() {
        
    }
    // Delete Administrator
    public DeleteAdministrator() {
        
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
    public PostAlgorithm () {
        
    }
    // Put Algorithm
    public PutAlgorithm () {
        
    }
    // Delete Algorithm
    public DeleteAlgorithm () {
        
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
    public PostBalance () {
        
    }
    // Put Balance
    public PutBalance () {
        
    }
    // Delete Balance
    public DeleteBalance () {
        
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
    public PostXBitCoin () {
        
    }
    // Put XBitCoin
    public PutXBitCoin () {
        
    }
    // Delete XBitCoin
    public DeleteXBitCoin () {
        
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
    public PostCountry () {
        
    }
    // Put Country
    public PutCountry () {
        
    }
    // Delete Country
    public DeleteCountry () {
        
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
    public PostCustomer () {
        
    }
    // Put Customer
    public PutCustomer () {
        
    }
    // Delete Customer
    public DeleteCustomer () {
        
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
    public PostHostingPeriod () {
        
    }
    // Put HostingPeriod
    public PutHostingPeriod () {
        
    }
    // Delete HostingPeriod
    public DeleteHostingPeriod () {
        
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
    public PostLocation () {
        
    }
    // Put Location
    public PutLocation () {
        
    }
    // Delete Location
    public DeleteLocation () {
        
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
    public PostManufacturer () {
        
    }
    // Put Manufacturer
    public PutManufacturer () {
        
    }
    // Delete Manufacturer
    public DeleteManufacturer () {
        
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
    public PostMiner () {
        
    }
    // Put Miner
    public PutMiner () {
        
    }
    // Delete Miner
    public DeleteMiner () {
        
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
    public PostMinerType () {
        
    }
    // Put MinerType
    public PutMinerType () {
        
    }
    // Delete MinerType
    public DeleteMinerType () {
        
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
    public PostMiningFarm () {
        
    }
    // Put MiningFarm
    public PutMiningFarm () {
        
    }
    // Delete MiningFarm
    public DeleteMiningFarm () {
        
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
    public PostUserInformation () {
        
    }
    // Put UserInformation
    public PutUserInformation () {
        
    }
    // Delete UserInformation
    public DeleteUserInformation () {
        
    }
    
  constructor(private genericHttpService: GenericHttpService) { }

}
