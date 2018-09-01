import { Data } from "./data";

export class Manufacturer extends Data {
    public name: string;
    public phone: string;
    public email: string;
    public website: string;

    constructor(data: any) {
        super(data);
        this.name = data.name;
        this.phone = data.phone;
        this.email = data.email;
        this.website = data.website;
    }
}