import { Component } from '@angular/core';
import { BackEndService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'healthmonitor';
  constructor(private backEndService:BackEndService) {
    
  }
  ngOnInit(): void {
    this.backEndService.fetchData();
    // this.backEndService.getBP();
   
  }
}
