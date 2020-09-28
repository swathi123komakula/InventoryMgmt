import { Component, OnInit } from '@angular/core';
import { RawMaterialOrdersService } from './rawmaterialorders-service';
import { RawMaterialOrders } from './rawmaterialorders';
import { Supplier } from './supplier';
import { RawMaterials } from './rawmaterials';
@Component
({
	selector : 'updaterawmaterial',
	templateUrl : './updateorder-component.html'
})
export class UpdateOrderComponent implements OnInit
{
     raw3 : RawMaterials = new RawMaterials(0,"",0,"",0,0,"","");
     sup3 : Supplier = new Supplier(0,"",0,"");
    rawMaterialOrders:RawMaterialOrders = new RawMaterialOrders(0,this.raw3,0,0,0,this.sup3,"","","");
    public constructor(private rawMaterialOrdersService:RawMaterialOrdersService){}
     public updateRawMaterialOrder() : void
    {
	this.rawMaterialOrdersService.updateRawMaterialOrder(this.rawMaterialOrders).subscribe();
    }
    public getRawMaterialOrder():void
    {
	this.rawMaterialOrdersService.getRawMaterialOrder(this.rawMaterialOrders.orderId).subscribe(data => this.rawMaterialOrders = data );
    }


    ngOnInit()
    {
    }
}