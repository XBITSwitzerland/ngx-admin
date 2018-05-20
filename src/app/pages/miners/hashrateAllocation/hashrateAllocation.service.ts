import { Injectable } from '@angular/core';

@Injectable()
export class HashrateAllocationService {
    allocationTableData = [
        {
            name: "Bitcoin",
            algorithm: "SHA-256"
        },
        {
            name: "Litecoin",
            algorithm: "SCRYPT"
        },
        {
            name: "Ethereum",
            algorithm: "ETHASH"
        },
        {
            name: "Monero",
            algorithm: "CRYPTONIGHT"
        },
        {
            name: "Dash",
            algorithm: "X11"
        }

    ]
}
