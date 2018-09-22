import { Data } from "./data";

export class CoinAlgorithm extends Data {
    public id: string;
    public algorithmId: string;
    public coinId: string;

    constructor(data: any) {
        super(data);
        this.id = data.id;
        this.algorithmId = data.algorithmId;
        this.coinId = data.coinId;
    }
}