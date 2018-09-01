import { Data } from "./data";

export class Administrator extends Data {
    public password: string;
    public userInformationId: string;

    constructor(data: any) {
        super(data);
        this.password = data.password;
        this.userInformationId = data.userInformationId;
    }
}