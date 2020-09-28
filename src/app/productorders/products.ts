export class Products
{
    productId:number;
    productName:String;
    pricePerUnit:number;
    description:String;
    wareHouseId:number;
    distributorId:number;
    manufacturingDate:String;
    expiryDate:String;
    public constructor(productId:number,productName:String, pricePerUnit:number,description:String, wareHouseId:number, distributorId:number,manufacturingDate:String,expiryDate:String)
    {
	this.productId = productId;
	this.productName = productName;
	this.pricePerUnit = pricePerUnit;
	this.description = description;
	this.wareHouseId = wareHouseId;
	this.distributorId = distributorId;
	this.manufacturingDate = manufacturingDate;
	this.expiryDate = expiryDate;

    }
}