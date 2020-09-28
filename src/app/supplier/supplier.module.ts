import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { SupplierComponent } from './supplier-component';

import { SupplierService } from './supplier-service';

import { FormsModule } from '@angular/forms';
 
import { SupplierListComponent } from './supplier-list.component';

import { CommonModule } from '@angular/common';

import { Observable } from 'rxjs';

import { SupplierHomeComponent } from './supplierhome.component';
import { SupplierRoutingModule } from './supplierrouting.module';
@NgModule({

  declarations: [SupplierComponent,SupplierListComponent, SupplierHomeComponent],

   imports: [HttpClientModule, FormsModule , CommonModule, SupplierRoutingModule ],

   providers: [ SupplierService ],

   exports: [ SupplierComponent , SupplierListComponent, SupplierHomeComponent ]

})

export class SupplierModule
{
}
