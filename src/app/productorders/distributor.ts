export class Distributor
{
    distributorId:number;
    distributorName:string;
    phoneNumber:number;
    address:string;
    public constructor(distributorId:number,distributorName:string,phoneNumber:number,address:string)
    {
        this.distributorId=distributorId;   this.distributorName = distributorName;
        this.phoneNumber = phoneNumber;   this.address = address;
    }
} 