export class ProductStock
{
    batchNo:number;
    productId:number;
    quantity:number;
    distributorId:number;
    warehouseId:number;
    manufacturingDate:String;
    expiryDate:String;
   
    public constructor(batchNo:number,productId:number,quantity:number,distributorId:number,warehouseId:number,manufacturingDate:String,expiryDate:String)
{
      this.batchNo=batchNo;
      this.productId=productId;
      this.quantity=quantity;
      this.distributorId=distributorId;
      this.warehouseId=warehouseId;
      this.manufacturingDate=manufacturingDate;
      this.expiryDate=expiryDate;
}
}