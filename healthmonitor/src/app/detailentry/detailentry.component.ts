import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BackEndService } from '../backend.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-detailentry',
  templateUrl: './detailentry.component.html',
  styleUrls: ['./detailentry.component.css']
})
export class DetailentryComponent implements OnInit {
  data = this.userDetails.getUserDetails();
  checkoutForm = this.formBuilder.group({
    aaAge: '',
    abSugar: '',
    acMaxHR:'',
    adHeartDisease:0,
    aeSex_F:0,
    afSex_M:0,
    agBPrange:0,
    ahBPrange:0,
    aiBPrange:0,
    ajBPrange:0,
    akBPrange:0,
    alBPrange:0,
    amBPrange:0,
    anBPrange:0,
    aoBPrange:0,
    apBPrange:0,
    aqBPrange:0,
    arBPrange:0,
    asBPrange:0,
    atBPrange:0,
    auBPrange:0,
    avBPrange:0,
    awBPrange:0,
    axBPrange:0,
    ayBPrange:0,
    azBPrange:0,
    baBPrange:0,
    bbBPrange:0,
    // bcBPrange:0,
    // bdBPrange:0,
  });

  constructor(private formBuilder: FormBuilder,private userDetails:UserService, private backEndService:BackEndService) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.data = this.userDetails.clearUserDetails();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.backEndService.saveUser(this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}