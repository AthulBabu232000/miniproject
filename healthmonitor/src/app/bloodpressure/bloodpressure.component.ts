import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../backend.service';
import { HealthService } from '../health.service';

@Component({
  selector: 'app-bloodpressure',
  templateUrl: './bloodpressure.component.html',
  styleUrls: ['./bloodpressure.component.css']
})
export class BloodpressureComponent implements OnInit {
bp?:string='';
  constructor(private backEndService:BackEndService,private healthService:HealthService) { }

  ngOnInit(): void {
this.healthService.changedBP.subscribe((bp:string)=>{
  this.bp = this.healthService.getBP();
 });
this.backEndService.getBP();

  }


}
