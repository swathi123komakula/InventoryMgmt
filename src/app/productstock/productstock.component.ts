import { Component , OnInit } from '@angular/core';
import { ProductStockService } from './productstock.service';
import { ProductStock } from './productstock';
@Component({
    selector: 'stock-management',
    templateUrl: './productstock.component.html'
})
export class ProductStockComponent implements OnInit
{
   ps:ProductStock = new ProductStock(0,0,0,0,0,'','')
   
   public constructor(private pss:ProductStockService){}
   public addStock() : void
   {
       this.pss.addStock(this.ps).subscribe();
   }
   ngOnInit()
   {
      
   }

}