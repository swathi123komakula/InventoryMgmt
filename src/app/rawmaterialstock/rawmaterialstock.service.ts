import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RawMaterialStock } from './rawmaterialstock';
import { Injectable } from '@angular/core';
@Injectable({
   providedIn:'root'
})
export class RawMaterialStockService
{
   public constructor(private httpClient:HttpClient){ }

   public addStock(rms:RawMaterialStock) : any
   {
      return this.httpClient.post<any>('http://localhost:8153/rawmaterial/addStock',rms);
   }

  

} 