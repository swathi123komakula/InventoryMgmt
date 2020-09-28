import { Component,OnInit} from '@angular/core';
import { SupplierService } from './supplier-service';
import { Supplier } from './supplier';
@Component ({
   selector: 'supplier-list', 
   templateUrl: './supplier-list.component.html'
})
export class SupplierListComponent implements OnInit
{
    exam:string
    suppliers:Supplier[];
    public constructor(private supplierService:SupplierService){}
    public getSuppliers():void
    {
       this.supplierService.getSuppliers().subscribe(data => this.suppliers=data);
    }
    ngOnInit(){}
}