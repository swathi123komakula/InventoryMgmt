import { RawMaterials } from './rawmaterials';
import { Supplier } from './supplier';
export class RawMaterialOrders
{
    orderId:number;
    rawMaterials:RawMaterials = new RawMaterials(0,"",0,"",0,0,"","");
    quantityValue:number;
    totalPrice:number;
    wareHouseId:number;
    supplier:Supplier = new Supplier(0,"",0,"");
    dateOfOrder:String;
    deliveryDate:String;
    deliveryStatus:String;
    public constructor(orderId:number,rawMaterials:RawMaterials,quantityValue:number,totalPrice:number,wareHouseId:number,supplier:Supplier,dateOfOrder:String,deliveryDate:String,deliveryStatus:String)
    {
	this.orderId = orderId;
	this.rawMaterials = rawMaterials;
	this.quantityValue = quantityValue;
	this.totalPrice = totalPrice;
	this.wareHouseId = wareHouseId;
	this.supplier = supplier;
	this.dateOfOrder = dateOfOrder;
	this.deliveryDate = deliveryDate;
	this.deliveryStatus = deliveryStatus;

    }
}