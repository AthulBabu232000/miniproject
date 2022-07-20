import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../backend.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private backEndService:BackEndService) { }

  ngOnInit(): void {
  }
  onFetch(){
    console.log("onFetch is called");
    this.backEndService.fetchData();
  }
  onSave(){
    console.log("onSave is called!");
    this.backEndService.saveData();
  }
  

}
