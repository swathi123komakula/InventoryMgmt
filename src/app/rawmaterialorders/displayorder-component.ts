import { Component, OnInit } from '@angular/core';
import { RawMaterialOrdersService } from './rawmaterialorders-service';
import { RawMaterialOrders } from './rawmaterialorders';
import { Supplier } from './supplier';
import { RawMaterials } from './rawmaterials';

@Component
({
	selector : 'displayrawmaterial',
	templateUrl : './displayorder-component.html'
})
export class DisplayOrderComponent implements OnInit
{
     raw1 : RawMaterials = new RawMaterials(0,"",0,"",0,0,"","");
     sup1 : Supplier = new Supplier(0,"",0,"");
     flag:Boolean = false;
     rawMaterialOrders:RawMaterialOrders = new RawMaterialOrders(0,this.raw1,0,0,0,this.sup1,"","","");
     public constructor(private rawMaterialOrdersService:RawMaterialOrdersService){}
    public getRawMaterialOrder():void
    {
	this.rawMaterialOrdersService.getRawMaterialOrder(this.rawMaterialOrders.orderId).subscribe(data => this.rawMaterialOrders = data );
        this.flag = true;
    }

    ngOnInit(){}
}