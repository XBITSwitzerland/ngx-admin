import { Data } from "./data";

export class MiningFarm extends Data {
    public name: string;
    public adminCustomerId: string;

    constructor(data: any) {
        super(data);
        this.name = data.name;
        this.adminCustomerId = data.adminCustomerId
    }
}