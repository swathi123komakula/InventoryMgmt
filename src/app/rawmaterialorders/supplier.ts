export class Supplier
{
  supplierId:number;
  supplierName:String;
  phoneno:number;
  address:String;
  public constructor(supplierId:number,supplierName:String,phoneno:number,address:String)
  {
	this.supplierId = supplierId;
	this.supplierName = supplierName;
	this.phoneno = phoneno;
	this.address = address;
  }
}