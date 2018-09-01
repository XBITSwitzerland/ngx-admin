import { Data } from "./data";

export class XBitCoin extends Data {
    public name: string;
    public shortName: string;
    public priceUrl: string;
    public website: string;

    constructor(data: any) {
        super(data);
        this.name = data.name;
        this.shortName = data.shortName;
        this.priceUrl = data.priceUrl;
        this.website = data.website;
    }
}