import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Supplier } from './supplier';

import { Injectable } from '@angular/core';

@Injectable({
   providedIn:'root'
})

export class SupplierService

{

   public constructor(private httpClient:HttpClient){ }

   public getSupplier(supplierId:number)  : Observable<Supplier>
   {

      return this.httpClient.get<any>('http://localhost:8151/getSupplier/'+supplierId);

   }


   public getSuppliers() : Observable<Supplier[]>
 
   {

      return this.httpClient.get<Supplier[]>('http://localhost:8151/getSuppliers');

   }


   public updateSupplier(supplier:Supplier) : any

   {

       return this.httpClient.put<any>('http://localhost:8151/updateSupplier',supplier);

   }

  
   public insertSupplier(supplier:Supplier) : any

   {

       return this.httpClient.post<any>('http://localhost:8151/addSupplier',supplier);

   }

} 
 

