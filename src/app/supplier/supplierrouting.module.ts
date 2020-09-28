import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { SupplierListComponent } from './supplier-list.component';

import { SupplierComponent } from './supplier-component';

import { SupplierHomeComponent } from './supplierhome.component';
const routes: Routes = [
			{path:'',component:SupplierHomeComponent,children:[
		  {path:'',children:[
				    
{path:'allsupplier',component:SupplierListComponent},

                        	    {path:'supplier',component:SupplierComponent}



]}]}
                       ];


@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})

export class SupplierRoutingModule { }
