import { Component, OnInit } from '@angular/core';
import { RawMaterialOrdersService } from './rawmaterialorders-service';
import { RawMaterialOrders } from './rawmaterialorders';
import { RawMaterials } from './rawmaterials';
import { RawMaterialsList } from './rawmaterialslist';
import { Supplier } from './supplier';

@Component
({
	selector : 'addrawmaterial',
	templateUrl : './addrawmaterial-component.html'
})
export class AddRawMaterialComponent implements OnInit
{
    raw : RawMaterials = new RawMaterials(0,"",0,"",0,0,"","");
    sup : Supplier = new Supplier(0,"",0,"");
    rawMaterialOrders:RawMaterialOrders = new RawMaterialOrders(0,this.raw,0,0,0,this.sup,"","","");
    public constructor(private rawMaterialOrdersService:RawMaterialOrdersService){}
    public addRawMaterialOrder() : void
    {
	this.rawMaterialOrdersService.addRawMaterialOrder(this.rawMaterialOrders).subscribe();
    }
     rawMaterialsList : RawMaterialsList[];
     flag:Boolean = false;
     public getRawMaterialsList() : void
	{
	    this.rawMaterialOrdersService.getRawMaterialsList().subscribe(data => this.rawMaterialsList = data);
	    this.flag = true;
        } 

    ngOnInit(){}
}