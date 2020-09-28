import { Component, OnInit } from '@angular/core';
import { RawMaterialOrdersService } from './rawmaterialorders-service';
import { RawMaterialOrders } from './rawmaterialorders';
@Component({
	selector : 'rawmaterial',
	templateUrl : './rawmaterialorders-component.html'
})
export class RawMaterialOrdersComponent implements OnInit
{
    flag:Boolean = false
    rawMt : RawMaterialOrders[] = [];
 
    public constructor(private rawMaterialOrdersService:RawMaterialOrdersService){}
    
    public getAllOrders() : void
	{
	    this.rawMaterialOrdersService.getAllOrders().subscribe(data => {this.rawMt = data;console.log(data)});
	    this.flag = true;
        } 

    ngOnInit(){}
}