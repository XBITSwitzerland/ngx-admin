import { Data } from "./data";

export class MinerType extends Data {
    public name: string;
    public watts: number;
    public manufacturerId: string;

    constructor(data: any) {
        super(data);
        this.name = data.name;
        this.watts = data.watts;
        this.manufacturerId = data.manufacturerId;
    }
}