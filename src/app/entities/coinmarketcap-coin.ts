import { IData } from "./Idata";

export class CoinMarketCapCoin implements IData {
    public id: string;
    public name: string;
    public symbol: string;
    public websiteSlug: string;
    public rank: number;
    public circulatingSupply: number;
    public totalSupply: number;
    public maxSupply: number;
    public quotes: any; // create new entity user to replace any type
    public lastUpdated: number;
    public metadata: any; // create new entity user to replace any type

    constructor(data: any) {
        this.id = data.data.id;
        this.name = data.data.name;
        this.symbol = data.data.symbol;
        this.websiteSlug = data.data.website_slug;
        this.rank = data.data.rank;
        this.circulatingSupply = data.data.circulating_supply;
        this.totalSupply = data.data.total_supply;
        this.maxSupply = data.data.max_supply;
        this.quotes = data.data.quotes;
        this.lastUpdated = data.data.last_updated;
        this.metadata = data.metadata;
    }
}