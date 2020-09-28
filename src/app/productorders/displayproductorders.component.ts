import { Component, OnInit } from '@angular/core';
import { ProductOrdersService } from './productorders.service';
import { ProductOrders } from './productorders';
import { Products } from './products';
import { Distributor } from './distributor';
@Component
({
	selector : 'displayproduct',
	templateUrl : './displayproductorders.component.html'
})
export class DisplayProductOrdersComponent implements OnInit
{
     p3 : Products = new Products(0,"",0,"",0,0,"","");
     d3 : Distributor = new Distributor(0,"",0,"");
     flag:Boolean = false;
     productOrders:ProductOrders = new ProductOrders(0,this.p3,0,0,0,this.d3,"","","");
     public constructor(private productOrdersService:ProductOrdersService){}
    public getProductOrder():void
    {
	this.productOrdersService.getProductOrder(this.productOrders.orderId).subscribe(data => this.productOrders = data );
        this.flag = true;
    }

    ngOnInit(){}
}