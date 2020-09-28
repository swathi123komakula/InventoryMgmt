import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductOrders } from './productorders';
import { Products } from './products';
import { Injectable } from '@angular/core';
import { ProductsList } from './Productslist';
@Injectable({
   providedIn:'root'
})
export class ProductOrdersService
{
    public constructor(private httpClient:HttpClient){}

    public getProductOrder(orderId:number) : Observable<ProductOrders>
    {
        return this.httpClient.get<any>('http://localhost:8157/getProductOrderDetails/'+orderId);
    }
    
    public getAllOrders() : Observable<ProductOrders[]>
    {
	return this.httpClient.get<ProductOrders[]>('http://localhost:8157/getAllProductOrders');
    }

    public updateProductOrder(productOrder:ProductOrders) : any
    {
	return this.httpClient.post<any>('http://localhost:8157/updateProductDeliveryStatus',productOrder);
    }
    
    public addProductOrder(productOrder:ProductOrders) :any
    {
	return this.httpClient.post<any>('http://localhost:8157/addProduct',productOrder);
    }

    public deleteProductOrder(orderId:number) : any
    {
	return this.httpClient.delete<any>('http://localhost:8157/deleteProductOrder/'+orderId);
    }
    public getProductsList() : Observable<ProductsList[]>
    {
	return this.httpClient.get<ProductsList[]>('http://localhost:8155/getProductsList');
    }
}