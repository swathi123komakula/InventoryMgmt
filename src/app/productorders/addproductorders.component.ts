import { Component, OnInit } from '@angular/core';
import { ProductOrdersService } from './productorders.service';
import { ProductOrders } from './productorders';
import { ProductsList } from './productslist';
import { Products } from './products';
import { Distributor } from'./distributor';

@Component
({
	selector : 'addproduct',
	templateUrl : './addproductorders.component.html'
})
export class AddProductOrdersComponent implements OnInit
{
    p1 : Products = new Products(0,"",0,"",0,0,"","");
    d1 : Distributor = new Distributor(0,"",0,"");
    productOrders:ProductOrders = new ProductOrders(0,this.p1,0,0,0,this.d1,"","","");
    public constructor(private productOrdersService:ProductOrdersService){}
    public addProductOrder() : void
    {
	this.productOrdersService.addProductOrder(this.productOrders).subscribe();
    }
     productsList : ProductsList[];
     flag:Boolean = false;
     public getProductsList() : void
	{
	    this.productOrdersService.getProductsList().subscribe(data => this.productsList = data);
	    this.flag = true;
        } 

    ngOnInit(){}
}