import { Data } from "./data";

export class Country extends Data {
    public name: string;

    constructor(data: any) {
        super(data);
        this.name = data.name;
    }
}