import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { ProductStockHomeComponent } from './productstockhome.component';
import { ProductStockComponent } from './productstock.component';
import { ProductStockService } from './productstock.service';
import { ProductStockRoutingModule } from './productstockrouting.module';
@NgModule({
  
   declarations: [
    ProductStockComponent, ProductStockHomeComponent
  ],
 
   imports: [  HttpClientModule, FormsModule , CommonModule, ProductStockRoutingModule ],
  
   providers: [ProductStockService  ],
 
   exports: [ProductStockComponent, ProductStockHomeComponent  ]
})
export class ProductStockModule
{
}