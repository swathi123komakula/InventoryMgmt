import { Products } from './products';
import { Distributor } from './distributor';
export class ProductOrders
{
    orderId:number;
    products:Products = new Products(0,"",0,"",0,0,"","");
    quantityValue:number;
    totalPrice:number;
    wareHouseId:number;
    distributor:Distributor = new Distributor(0,"",0,"");
    dateOfOrder:String;
    deliveryDate:String;
    deliveryStatus:String;
    public constructor(orderId:number,products:Products,quantityValue:number,totalPrice:number,wareHouseId:number, distributor:Distributor,dateOfOrder:String,deliveryDate:String,deliveryStatus:String)
    {
	this.orderId = orderId;
	this.products = products;
	this.quantityValue = quantityValue;
	this.totalPrice = totalPrice;
	this.wareHouseId = wareHouseId;
	this.distributor = distributor;
	this.dateOfOrder = dateOfOrder;
	this.deliveryDate = deliveryDate;
	this.deliveryStatus = deliveryStatus;

    }
}