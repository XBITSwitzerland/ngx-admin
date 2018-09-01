import { IData } from '../Idata';

export class Data implements IData {
    public id: string;
    
    constructor(data: any) {
        this.id = data.id;
    }
}