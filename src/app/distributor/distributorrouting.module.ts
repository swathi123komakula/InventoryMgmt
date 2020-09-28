import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { DistributorHomeComponent } from './distributorhome.component';
import { DistributorListComponent } from './distributor-list.component';

import { DistributorComponent } from './distributor-component';


const routes: Routes = [
			{path:'',component:DistributorHomeComponent,children:[
		  {path:'',children:[
				    
{path:'alldistributors',component:DistributorListComponent},

                        	    {path:'distributor',component:DistributorComponent}



]}]}
                       ];


@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})

export class DistributorRoutingModule { }
