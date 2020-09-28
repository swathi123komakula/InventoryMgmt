import { Component, OnInit } from '@angular/core';
import { ProductOrdersService } from './productorders.service';
import { ProductOrders } from './productorders';
import { Products } from './products';
import { Distributor } from'./distributor';

@Component
({
	selector : 'deleteproduct',
	templateUrl : './deleteproductorders.component.html'
})
export class DeleteProductOrdersComponent implements OnInit
{
     p2 : Products = new Products(0,"",0,"",0,0,"","");
     d2 : Distributor = new Distributor(0,"",0,"");
     productOrders:ProductOrders = new ProductOrders(0,this.p2,0,0,0,this.d2,"","","");
     public constructor(private productOrdersService:ProductOrdersService){}
     public deleteProductOrder() : void
    {
       
	this.productOrdersService.deleteProductOrder(this.productOrders.orderId).subscribe();
    }

    ngOnInit(){}
}