import { Data } from "./data";

export class Balance extends Data {
    public miningFarmId: string;
    public coinId: string;
    public walletAddress: string;
    public totalFarmedAmout: string;
    
    constructor(data: any) {
        super(data);
        this.miningFarmId = data.miningFarmId;
        this.coinId = data.coinId;
        this.walletAddress = data.walletAddress;
        this.totalFarmedAmout = data.totalFarmedAmout;
    }
}