export class RawMaterials
{
    rawMaterialId:number;
    rawMaterialName:String;
    pricePerUnit:number;
    description:String;
    wareHouseId:number;
    supplierId:number;
    manufacturingDate:String;
    expiryDate:String;
    public constructor(rawMaterialId:number,rawMaterialName:String, pricePerUnit:number,description:String, wareHouseId:number, supplierId:number,manufacturingDate:String,expiryDate:String)
    {
	this.rawMaterialId = rawMaterialId;
	this.rawMaterialName = rawMaterialName;
	this.pricePerUnit = pricePerUnit;
	this.description = description;
	this.wareHouseId = wareHouseId;
	this.supplierId = supplierId;
	this.manufacturingDate = manufacturingDate;
	this.expiryDate = expiryDate;

    }
}