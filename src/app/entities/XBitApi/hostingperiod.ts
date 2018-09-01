import { Data } from "./data";

export class HostingPeriod extends Data {
    public startDate: string;
    public endDate: string;
    public minerId: string;
    public pricePerMonth: number;

    constructor(data: any) {
        super(data);
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.minerId = data.minerId;
        this.pricePerMonth = data.pricePerMonth;
    }
}