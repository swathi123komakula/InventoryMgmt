import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductStock } from './productstock';
import { Injectable } from '@angular/core';
@Injectable({
   providedIn:'root'
})
export class ProductStockService
{
   public constructor(private httpClient:HttpClient){ }
   public addStock(ps:ProductStock) : any
   {
      return this.httpClient.post<any>('http://localhost:8152/productstock/addstock',ps);
   }

  

} 