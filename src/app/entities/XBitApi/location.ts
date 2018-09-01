import { Data } from "./data";

export class Location extends Data {
    public name: string;
    public addressId: string;

    constructor(data: any) {
        super(data);
        this.name = data.name;
        this.addressId = data.addressId;
    }
}