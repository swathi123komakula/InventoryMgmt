import { Component, OnInit } from '@angular/core';
import { ProductOrdersService } from './productorders.service';
import { ProductOrders } from './productorders';
@Component({
	selector : 'allproduct',
	templateUrl : './productorders.component.html'
})
export class ProductOrdersComponent implements OnInit
{
    flag:Boolean = false
    prod : ProductOrders[] = [];
 
    public constructor(private productOrdersService:ProductOrdersService){}
    
    public getAllOrders() : void
	{
	    this.productOrdersService.getAllOrders().subscribe(data => {this.prod = data;console.log(data)});
	    this.flag = true;
        } 

    ngOnInit(){}
}