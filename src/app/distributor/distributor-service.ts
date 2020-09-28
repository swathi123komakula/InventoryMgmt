import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Distributor } from './distributor';

import { Injectable } from '@angular/core';

@Injectable({

   providedIn:'root'
})

export class DistributorService

{

   public constructor(private httpClient:HttpClient){ }

   public getDistributor(distributorId:number)  : Observable<Distributor>
   {

      return this.httpClient.get<any>('http://localhost:8150/getDistributor/'+distributorId);

   }


   public getDistributors(): Observable<Distributor[]>

   {

      return this.httpClient.get<Distributor[]>('http://localhost:8150/getDistributors');

   }


   public updateDistributor(distributor:Distributor) : any

   {

       return this.httpClient.put<any>('http://localhost:8150/updateDistributor',distributor);

   }

  
   public insertDistributor(distributor:Distributor) : any

   {

       return this.httpClient.post<any>('http://localhost:8150/addDistributor',distributor);

   }

} 
 
