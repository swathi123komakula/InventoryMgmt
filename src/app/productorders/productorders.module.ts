import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { ProductOrdersService } from './productorders.service';
import { ProductOrdersRoutingModule } from './productordersrouting.module';
import { ProductOrdersComponent } from './productorders.component';
import { ProductHomeComponent } from './producthome.component';
import { AddProductOrdersComponent } from './addproductorders.component';
import { UpdateProductOrdersComponent } from './updateproductorders.component';
import { DeleteProductOrdersComponent } from './deleteproductorders.component';
import { DisplayProductOrdersComponent } from './displayproductorders.component';
@NgModule({
  
   declarations: [
 ProductOrdersComponent, ProductHomeComponent, AddProductOrdersComponent,
                   UpdateProductOrdersComponent, DeleteProductOrdersComponent, DisplayProductOrdersComponent  ],
 
   imports: [
 ProductOrdersRoutingModule,  HttpClientModule, FormsModule , CommonModule ],
  
   providers: [ ProductOrdersService ],
 
   exports: [ ProductOrdersComponent, ProductHomeComponent, AddProductOrdersComponent,
                   UpdateProductOrdersComponent, DeleteProductOrdersComponent, DisplayProductOrdersComponent  ]
})
export class ProductOrdersModule
{
}