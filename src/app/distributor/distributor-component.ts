import { Component, OnInit } from '@angular/core';

import { DistributorService} from './distributor-service';

import { Distributor} from './distributor';

@Component({

  selector: 'add-distributor',
 
  templateUrl: './distributor-component.html'

})

export class DistributorComponent implements OnInit 

{

  distributor:Distributor=new Distributor(0,'',0,'');

  public constructor(private distributorService:DistributorService){}

  public getDistributor():void

  {

	this.distributorService.getDistributor(this.distributor.distributorId).subscribe(data =>this.distributor=data);

  }

  public updateDistributor():void

  {

    this.distributorService.updateDistributor(this.distributor).subscribe();

  }

  public insertDistributor():void

  {

    this.distributorService.insertDistributor(this.distributor).subscribe();

  }
 
   ngOnInit()

  {
 
    //this.getDistributor();

  }

}

