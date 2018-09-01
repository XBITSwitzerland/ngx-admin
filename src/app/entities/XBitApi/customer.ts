import { Data } from "./data";

export class Customer extends Data {
    public userInformationid: string;
    public addressId: string;
    public farmMail: string;
    public password: string;

    constructor(data: any) {
        super(data);
        this.userInformationid = data.userInformationid;
        this.addressId = data.addressId;
        this.farmMail = data.farmMail;
        this.password = data.password;
    }
}