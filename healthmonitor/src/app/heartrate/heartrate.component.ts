import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../backend.service';
import { Health } from '../health.model';
import { HealthService } from '../health.service';

@Component({
  selector: 'app-heartrate',
  templateUrl: './heartrate.component.html',
  styleUrls: ['./heartrate.component.css']
})
export class HeartrateComponent implements OnInit {
  heartrat: string='';
  objectKeys=Object.keys;
  constructor(private healthService:HealthService, private backEndService:BackEndService) { }
  listOfHealths?: Health[]=[];

  ngOnInit(): void {
    this.listOfHealths = this.healthService.getHealths();
    this.healthService.listChangedEvent.subscribe((listOfHealths:Health[])=>{
     this.listOfHealths = this.healthService.getHealths();
    console.log(this.healthService.getHealths());
  
    
    });
    
  }


}
