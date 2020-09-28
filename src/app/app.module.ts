import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { RawMaterialOrdersModule } from './rawmaterialorders/rawmaterialorders.module';
import { ProductStockModule } from './productstock/productstock.module';
import { RawMaterialStockModule } from './rawmaterialstock/rawmaterialstock.module';


import { ProductOrdersModule } from './productorders/productorders.module';
import { DistributorModule } from './distributor/distributor.module';
import { SupplierModule } from './supplier/supplier.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
@NgModule({

  declarations: [
    AppComponent, LoginComponent, HomeComponent
 ],

  imports: [

    BrowserModule,
 AppRoutingModule, HttpClientModule, FormsModule , ReactiveFormsModule, CommonModule,RawMaterialOrdersModule,
		ProductStockModule, RawMaterialStockModule, ProductOrdersModule, DistributorModule, SupplierModule ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }
