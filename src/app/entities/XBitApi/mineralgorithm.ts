import { Data } from "./data";

export class MinerAlgorithm extends Data {
    public minerTypeId: string;
    public hashrate: number;
    public algorithmId: string;

    constructor(data: any) {
        super(data);
        this.minerTypeId = data.name;
        this.hashrate = data.watts;
        this.algorithmId = data.manufacturerId;
    }
}