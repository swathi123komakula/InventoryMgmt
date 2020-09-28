import { Component,OnInit} from '@angular/core';
import { DistributorService } from './distributor-service';
import { Distributor } from './distributor';
@Component ({
   selector: 'distributor-list', 
   templateUrl: './distributor-list.component.html'
})
export class DistributorListComponent implements OnInit
{
    exam:string
    distributors:Distributor[];
    public constructor(private distributorService:DistributorService){}
    public getDistributors():void
    {
       this.distributorService.getDistributors().subscribe(data => this.distributors=data);
      }
    ngOnInit(){}
}