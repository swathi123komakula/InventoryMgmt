import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { DistributorComponent } from './distributor-component';

import { DistributorService } from './distributor-service';

import { FormsModule } from '@angular/forms';

import { DistributorListComponent } from './distributor-list.component';

import { CommonModule } from '@angular/common';

import { Observable } from 'rxjs';

import { DistributorHomeComponent } from './distributorhome.component';
import { DistributorRoutingModule } from './distributorrouting.module';
@NgModule({

  declarations: [DistributorComponent,DistributorListComponent, DistributorHomeComponent],

   imports: [HttpClientModule, FormsModule , CommonModule, DistributorRoutingModule ],

   providers: [ DistributorService ],

   exports: [ DistributorComponent , DistributorListComponent, DistributorHomeComponent ]

})

export class DistributorModule
{
}
