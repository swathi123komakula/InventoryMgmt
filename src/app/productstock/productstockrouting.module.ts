import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { ProductStockComponent } from './productstock.component';


import { ProductStockHomeComponent } from './productstockhome.component';
const routes: Routes = [
			{path:'',component:ProductStockHomeComponent,children:[
		  {path:'',children:[
				    
{path:'productstock',component:ProductStockComponent}



]}]}
                       ];


@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})

export class ProductStockRoutingModule { }
