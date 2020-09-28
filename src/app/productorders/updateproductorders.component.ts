import { Component, OnInit } from '@angular/core';
import { ProductOrdersService } from './productorders.service';
import { ProductOrders } from './productorders';
import { Products } from './products';
import { Distributor } from './distributor';

@Component
({
	selector : 'updateproduct',
	templateUrl : './updateproductorders.component.html'
})
export class UpdateProductOrdersComponent implements OnInit
{
    p4 : Products = new Products(0,"",0,"",0,0,"","");
    d4 : Distributor = new Distributor(0,"",0,"");
    productOrders:ProductOrders = new ProductOrders(0,this.p4,0,0,0,this.d4,"","","");
    public constructor(private productOrdersService:ProductOrdersService){}
    public updateProductOrder() : void
    {
	this.productOrdersService.updateProductOrder(this.productOrders).subscribe();
    }
    public getProductOrder():void
    {
	this.productOrdersService.getProductOrder(this.productOrders.orderId).subscribe(data => this.productOrders = data );
    }


    ngOnInit(){}
}