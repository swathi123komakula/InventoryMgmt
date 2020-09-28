import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RawMaterialOrders } from './rawmaterialorders';
import { RawMaterials } from './rawmaterials';
import { Injectable } from '@angular/core';
import { RawMaterialsList } from './rawmaterialslist';
@Injectable({
   providedIn:'root'
})
export class RawMaterialOrdersService
{
    public constructor(private httpClient:HttpClient){}

    public getRawMaterialOrder(orderId:number) : Observable<RawMaterialOrders>
    {
        return this.httpClient.get<any>('http://localhost:8156/getOrderDetails/'+orderId);
    }
    
    public getAllOrders() : Observable<RawMaterialOrders[]>
    {
	return this.httpClient.get<RawMaterialOrders[]>('http://localhost:8156/getAllOrders');
    }

    public updateRawMaterialOrder(rawMaterialOrder:RawMaterialOrders) : any
    {
	return this.httpClient.post<any>('http://localhost:8156/updateDeliveryStatus',rawMaterialOrder);
    }
    
    public addRawMaterialOrder(rawMaterialOrder:RawMaterialOrders) : any
    {
	return this.httpClient.post<any>('http://localhost:8156/addRawMaterial',rawMaterialOrder);
    }

    public deleteRawMaterialOrder(orderId:number) : any
    {
	return this.httpClient.delete<any>('http://localhost:8156/deleteOrder/'+orderId);
    }
    public getRawMaterialsList() : Observable<RawMaterialsList[]>
    {
	return this.httpClient.get<RawMaterialsList[]>('http://localhost:8156/getRawMaterialsList');
    }
}