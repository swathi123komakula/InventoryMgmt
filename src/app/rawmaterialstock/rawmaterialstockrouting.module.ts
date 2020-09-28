import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { RawMaterialStockComponent } from './rawmaterialstock.component';


import { RawMaterialStockHomeComponent } from './rawmaterialstockhome.component';
const routes: Routes = [
			{path:'',component:RawMaterialStockHomeComponent,children:[
		  {path:'',children:[
				    
{path:'rawmaterialstock',component:RawMaterialStockComponent}



]}]}
                       ];


@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})

export class RawMaterialStockRoutingModule { }
