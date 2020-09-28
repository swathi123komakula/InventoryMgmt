import { Component, OnInit } from '@angular/core';
import { RawMaterialOrdersService } from './rawmaterialorders-service';
import { RawMaterialOrders } from './rawmaterialorders';
import { Supplier } from './supplier';
import { RawMaterials } from './rawmaterials';

@Component
({
	selector : 'deleterawmaterial',
	templateUrl : './deleteorder-component.html'
})
export class DeleteOrderComponent implements OnInit
{
     raw2 : RawMaterials = new RawMaterials(0,"",0,"",0,0,"","");
     sup2 : Supplier = new Supplier(0,"",0,"");
     rawMaterialOrders:RawMaterialOrders = new RawMaterialOrders(0,this.raw2,0,0,0,this.sup2,"","","");
     public constructor(private rawMaterialOrdersService:RawMaterialOrdersService){}
     public deleteRawMaterialOrder() : void
    {
       
	this.rawMaterialOrdersService.deleteRawMaterialOrder(this.rawMaterialOrders.orderId).subscribe();
    }

    ngOnInit(){}
}