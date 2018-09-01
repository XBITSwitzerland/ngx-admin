import { Data } from "./data";

export class Miner extends Data {
    public minerTypeId: string;
    public coinAlgorithmId: string;
    public miningFarmId: string;
    public shelfId: string;

    constructor(data: any) {
        super(data);
        this.minerTypeId = data.minerTypeId;
        this.coinAlgorithmId = data.coinAlgorithmId;
        this.miningFarmId = data.miningFarmId;
        this.shelfId = data.shelfId;
    }
}