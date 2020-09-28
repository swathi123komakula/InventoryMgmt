export class RawMaterialStock
{
    batchNo:number;
    rawMaterialId:number;
    quantity:number;
    supplierId:number;
    warehouseId:number;
    manufacturingDate:String;
    expiryDate:String;
   
    public constructor(batchNo:number,rawMaterialId:number,quantity:number,supplierId:number,warehouseId:number,manufacturingDate:String,expiryDate:String)
{
      this.batchNo=batchNo;
      this.rawMaterialId=rawMaterialId;
      this.quantity=quantity;
      this.supplierId=supplierId;
      this.warehouseId=warehouseId;
      this.manufacturingDate=manufacturingDate;
      this.expiryDate=expiryDate;
}
}