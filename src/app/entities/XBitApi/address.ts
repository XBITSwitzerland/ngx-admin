import { Data } from "./data";

export class Address extends Data {
    public street: string;
    public place: string;
    public zip: string;
    public countryId: string;

    constructor(data: any) {
        super(data);
        this.street = data.street;
        this.place = data.place;
        this.zip = data.zip;
        this.countryId = data.countryId;
    }
}