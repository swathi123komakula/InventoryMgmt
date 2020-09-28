import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { RawMaterialStockComponent } from './rawmaterialstock.component';
import { RawMaterialStockHomeComponent } from './rawmaterialstockhome.component';
import { RawMaterialStockRoutingModule } from './rawmaterialstockrouting.module';
import { RawMaterialStockService } from './rawmaterialstock.service';
@NgModule({
  
   declarations: [RawMaterialStockComponent, RawMaterialStockHomeComponent
    
 , ],
 
   imports: [
    HttpClientModule, FormsModule , CommonModule , RawMaterialStockRoutingModule],
  
   providers: [ RawMaterialStockService ],
 
   exports: [  RawMaterialStockComponent , RawMaterialStockHomeComponent ]
})
export class RawMaterialStockModule
{
}