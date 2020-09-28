import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { ProductHomeComponent } from './producthome.component';
import { AddProductOrdersComponent } from './addproductorders.component';
import { UpdateProductOrdersComponent } from './updateproductorders.component';
import { DeleteProductOrdersComponent } from './deleteproductorders.component';
import { DisplayProductOrdersComponent } from './displayproductorders.component';
import { ProductOrdersComponent } from './productorders.component';
const routes: Routes = [
                        	{path:'',component:ProductHomeComponent,children:[
		       	  {path:'',children:[
					{path:'productorder',component:AddProductOrdersComponent},
					{path:'productupdate',component:UpdateProductOrdersComponent},
					{path:'productdelete',component:DeleteProductOrdersComponent},
					{path:'productdetails',component:DisplayProductOrdersComponent},
					{path:'productall',component:ProductOrdersComponent}
			  ]}]}
		      ];

@NgModule
({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class ProductOrdersRoutingModule { }
