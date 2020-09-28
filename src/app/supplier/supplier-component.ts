import { Component, OnInit } from '@angular/core';
import { SupplierService} from './supplier-service';
import { Supplier } from './supplier';
@Component({
  selector: 'add-supplier',
  templateUrl: './supplier-component.html'
})
export class SupplierComponent implements OnInit 
{
  supplier:Supplier=new Supplier(0,'',0,'');
  public constructor(private supplierService:SupplierService){}
  public getSupplier():void
  {
this.supplierService.getSupplier(this.supplier.supplierId).subscribe(data =>this.supplier=data);
  }
  public updateSupplier():void
  {
    this.supplierService.updateSupplier(this.supplier).subscribe();
  }
  public insertSupplier():void
  {
    this.supplierService.insertSupplier(this.supplier).subscribe();
  }
    ngOnInit()
  { 
    //this.getSupplier();
  }
}

