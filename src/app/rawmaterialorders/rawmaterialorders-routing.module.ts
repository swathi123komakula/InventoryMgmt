import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { RawMaterialHomeComponent } from './rawmaterialhome-component';
import { AddRawMaterialComponent } from './addrawmaterial-component';
import { UpdateOrderComponent } from './updateorder-component';
import { DisplayOrderComponent } from './displayorder-component';
import { DeleteOrderComponent } from './deleteorder-component';
import { RawMaterialOrdersComponent } from './rawmaterialorders-component';

const routes: Routes = [
                        {path:'',component:RawMaterialHomeComponent,children:[
		  {path:'',children:[
			{path:'addrawmaterial',component:AddRawMaterialComponent},
                        {path:'updaterawmaterial',component:UpdateOrderComponent},
                        {path:'displayrawmaterial',component:DisplayOrderComponent},
                        {path:'deleterawmaterial',component:DeleteOrderComponent},
			{path:'allorders',component:RawMaterialOrdersComponent}

]}]}
                       ];


@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class RawMaterialOrdersRoutingModule 
{ }
