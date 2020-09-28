export class Supplier
{
    supplierId:number;
    supplierName:string;
    phoneNumber:number;
    address:string;
    public constructor(supplierId:number,supplierName:string,phoneNumber:number,address:string)
    {
        this.supplierId=supplierId;   this.supplierName = supplierName;
        this.phoneNumber = phoneNumber;   this.address = address;
    }
}
 