import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../backend.service';
import { Health } from '../health.model';
import { HealthService } from '../health.service';

@Component({
  selector: 'app-displayer',
  templateUrl: './displayer.component.html',
  styleUrls: ['./displayer.component.css']
})
export class DisplayerComponent implements OnInit {

  constructor(private healthService:HealthService, private backEndService:BackEndService) { }
  listOfHealths?: Health[]=[];
  ngOnInit(): void {

    this.healthService.listChangedEvent.subscribe((listOfHealths:Health[])=>{
      this.listOfHealths = this.healthService.getHealths();
     console.log(this.healthService.getHealths());
   
     
     });

  }

}
