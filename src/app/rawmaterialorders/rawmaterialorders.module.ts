import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { RawMaterialOrdersRoutingModule } from './rawmaterialorders-routing.module';
import { RawMaterialOrdersService } from './rawmaterialorders-service';
import { RawMaterialOrdersComponent } from './rawmaterialorders-component';
import { RawMaterialHomeComponent } from './rawmaterialhome-component';
import { AddRawMaterialComponent } from './addrawmaterial-component';
import { UpdateOrderComponent } from './updateorder-component';
import { DisplayOrderComponent } from './displayorder-component';
import { DeleteOrderComponent } from './deleteorder-component';

@NgModule({
  
   declarations: [
  RawMaterialOrdersComponent,  RawMaterialHomeComponent, AddRawMaterialComponent, 
                    UpdateOrderComponent, DisplayOrderComponent, DeleteOrderComponent  ],
 
   imports: [
    HttpClientModule, FormsModule , CommonModule, RawMaterialOrdersRoutingModule],
  
   providers: [ RawMaterialOrdersService ],
 
   exports: [ RawMaterialOrdersComponent, RawMaterialHomeComponent, AddRawMaterialComponent, 
                    UpdateOrderComponent, DisplayOrderComponent, DeleteOrderComponent ]
})
export class RawMaterialOrdersModule
{
}