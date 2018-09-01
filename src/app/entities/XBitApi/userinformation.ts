import { Data } from "./data";

export class UserInformation extends Data {
    public name: string;
    public surname: string;
    public email: string;
    public phone: string;
    public birthDate: string;
    public username: string;

    constructor(data: any) {
        super(data);
        this.name = data.name;
        this.surname = data.surname;
        this.email = data.email;
        this.phone = data.phone;
        this.birthDate = data.birthDateM
        this.username = data.username;
    }
}