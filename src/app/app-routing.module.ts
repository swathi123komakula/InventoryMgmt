import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';


const routes: Routes = [

                      {path:'home',component:HomeComponent,
	children:[

		      {path: 'rawmaterialsop',loadChildren: () => import('./rawmaterialorders/rawmaterialorders.module').then(m => m.RawMaterialOrdersModule)
},

                      {path: 'productsop',
loadChildren: () => import('./productorders/productorders.module').then(m => m.ProductOrdersModule)
},

                      {path: 'rawmaterialstockop',loadChildren: () => import('./rawmaterialstock/rawmaterialstock.module').then(m => m.RawMaterialStockModule)},
		      {path: 'productstockop',
loadChildren: () => import('./productstock/productstock.module').then(m => m.ProductStockModule)
},

		      {path: 'distributorop',loadChildren: () => import('./distributor/distributor.module').then(m => m.DistributorModule)
},
		      {path: 'supplierop',loadChildren: () => import('./supplier/supplier.module').then(m => m.SupplierModule)
}
        	 ]},

		      {path:'login',component:LoginComponent},
		      
{path:'**',redirectTo:''}

                      
];



@NgModule
({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }
