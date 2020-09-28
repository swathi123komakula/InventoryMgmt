import { Component , OnInit } from '@angular/core';
import { RawMaterialStockService } from './rawmaterialstock.service';
import { RawMaterialStock } from './rawmaterialstock';
@Component({
    selector: 'rmstock-management',
    templateUrl: './rawmaterialstock.component.html'
})
export class RawMaterialStockComponent implements OnInit
{
   rms:RawMaterialStock = new RawMaterialStock(0,0,0,0,0,'','')
   
   public constructor(private rmss:RawMaterialStockService){}
   public addStock() : void
   {
       this.rmss.addStock(this.rms).subscribe();
   }



   ngOnInit()
   {
      
   }

}